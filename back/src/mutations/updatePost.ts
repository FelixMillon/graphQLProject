import { getUser } from "../modules/auth.js";
import { MutationResolvers } from "../types.js";

export const updatePost: MutationResolvers['updatePost'] = async (_, {postId, title, body, token}, {dataSources}) => {
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
    if(typeof title === 'string'){
        updateData.title = title
    }
    if(typeof body === 'string'){
        updateData.body = body
    }
    await dataSources.db.post.update({
        where:{
            id: postId,
            authorId: userdata.id
        },
        data: updateData
    });
    return {
      code: 201,
      message: 'Post has been updated',
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