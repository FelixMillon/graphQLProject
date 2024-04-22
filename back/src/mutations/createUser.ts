import { hashPassword } from "../modules/auth.js";
import { MutationResolvers } from "../types.js";

export const createUser: MutationResolvers['createUser'] = async (_, {email, name, password}, {dataSources}) => {
  try {
    const createdUser = await dataSources.db.user.create({
      data: {email, name, password: await hashPassword(password)},
    });
  
    return {
      code: 201,
      message: 'User has been created',
      success: true,
      user: {
        id: createdUser.id,
        email: createdUser.email,
        name: createdUser.name,
        posts: [],
        postsLike: []
      }
    }
  } catch(e) {
    return {
      code: 400,
      message: (e as Error).message,
      success: false,
      user: null
    }
  }
}