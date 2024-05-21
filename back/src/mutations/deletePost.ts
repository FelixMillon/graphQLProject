import { getUser } from "../modules/auth.js";
import { MutationResolvers } from "../types.js";

export const deletePost: MutationResolvers['deletePost'] = async (_, {postId, token}, {dataSources}) => {
  try {
    const userdata = getUser(token)
    if(!userdata){
        return {
            code: 400,
            message: "invalid token",
            success: false
        }
    }
    await dataSources.db.post.delete({
        where:{
            id: postId,
            authorId: userdata.id
        }
    });
    return {
      code: 201,
      message: 'Post has been deleted',
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