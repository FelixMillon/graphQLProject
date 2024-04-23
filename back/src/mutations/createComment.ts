import { getUser } from "../modules/auth.js";
import { MutationResolvers } from "../types.js";

export const createComment: MutationResolvers['createComment'] = async (_, {comment, postId, token}, {dataSources}) => {
  try {
    const userdata = getUser(token)
    if(!userdata){
        return {
            code: 400,
            message: "invalid token",
            success: false
        }
    }
    await dataSources.db.comment.create({
        data: {
            comment: comment,
            postId: postId,
            authorId: userdata.id
        },
    });
    return {
      code: 201,
      message: 'Comment has been created',
      success: true
    }
  } catch(e) {
    return {
      code: 400,
      message: (e as Error).message,
      success: false
    }
  }
}