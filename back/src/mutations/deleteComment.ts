import { getUser } from "../modules/auth.js";
import { MutationResolvers } from "../types.js";

export const deleteComment: MutationResolvers['deleteComment'] = async (_, {commentId, token}, {dataSources}) => {
  try {
    const userdata = getUser(token)
    if(!userdata){
        return {
            code: 400,
            message: "invalid token",
            success: false
        }
    }
    await dataSources.db.comment.delete({
        where:{
            id: commentId
        }
    });
    return {
      code: 201,
      message: 'Comment has been deleted',
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