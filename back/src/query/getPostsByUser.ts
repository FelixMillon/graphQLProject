import { QueryResolvers } from '../types';

export const getPostsByUser: QueryResolvers['getPostsByUser'] = async (_, { userId }, { dataSources }) => {
    try {
      const postsByUser = await dataSources.db.post.findMany({
        where: {
          authorId: userId,
        },
      });
      
      return postsByUser;
    } catch (error) {
      console.error('Failed to fetch posts by user:', error);
      throw new Error('Failed to fetch posts by user');
    }
  };
  