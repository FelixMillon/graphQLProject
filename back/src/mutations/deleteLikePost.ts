import { getUser } from "../modules/auth.js";
import { MutationResolvers } from "../types.js";

export const deleteLikePost: MutationResolvers['deleteLikePost'] = async (_, {postId, token}, {dataSources}) => {
  try {
    const userdata = getUser(token)

    if(!userdata){
        return {
            code: 400,
            message: "invalid token",
            success: false
        }
    }
    // AMELIORATION POSSIBLE
    // alreadyLiked peux être évité en faisant un identifiant hérité des tables posts et user.
    const actualLike = await dataSources.db.userPostLikes.findFirst({
        where:{
            userId: userdata.id,
            postId: postId
        }
    });
    if(!actualLike){
        return {
            code: 400,
            message: 'No like found',
            success: true
        }
    }
    await dataSources.db.userPostLikes.delete({
        where: {
            id: actualLike.id
        }
    });
    return {
        code: 201,
        message: 'Like has been deleted',
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