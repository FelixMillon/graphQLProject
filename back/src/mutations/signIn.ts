import { comparePassword, createJWT } from "../modules/auth.js";
import { MutationResolvers } from "../types.js";

export const signIn: MutationResolvers['signIn'] = async (_, {email, password}, {dataSources}) => {
  try {
    const inBaseUser = await dataSources.db.user.findUnique({where: {email}});
    if(!inBaseUser?.id){
      return(
        {
          code: 403,
          message: 'user not found',
          success: false,
          token: null
        }
      )
    }
    const isValid = await comparePassword(password,inBaseUser.password);
    if(isValid){
      return {
        code: 200,
        message: 'Authentified',
        success: true,
        id: inBaseUser.id,
        token: createJWT({
          id: inBaseUser.id,
          email: inBaseUser.email,
          name: inBaseUser.name
        })
      }
    }
    return {
      code: 401,
      message: 'Unauthorized',
      success: false,
      token: null
    }
  } catch(e) {
    return {
      code: 500,
      message: (e as Error).message,
      success: false,
      token: null
    }
  }
}