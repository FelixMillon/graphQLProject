import { getUser } from "../modules/auth.js";
import { MutationResolvers } from "../types.js";

export const updateComment: MutationResolvers['updateComment'] = async (_, {commentId, comment, token}, {dataSources}) => {
  try {
    const userdata = getUser(token)
    if(!userdata){
        return {
            code: 400,
            message: "invalid token",
            success: false
        }
    }
    let updateData: { [key: string]: string } = {};
    if(typeof comment === 'string'){
        updateData.comment = comment
    }
    await dataSources.db.comment.update({
        where:{
            id: commentId,
            authorId: userdata.id
        },
        data: updateData
    });
    return {
      code: 201,
      message: 'Comment has been updated',
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