import { getUser } from "../modules/auth.js";
import { MutationResolvers } from "../types.js";

export const createPost: MutationResolvers['createPost'] = async (_, {title, body, token}, {dataSources}) => {
  try {
    const userdata = getUser(token)
    if(!userdata){
        return {
            code: 400,
            message: "invalid token",
            success: false
        }
    }
    await dataSources.db.post.create({
        data: {
            title,
            body,
            authorId: userdata.id
        },
    });
    return {
      code: 201,
      message: 'Post has been created',
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