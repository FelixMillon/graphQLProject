import { QueryResolvers } from '../types';

export const getPostById: QueryResolvers['getPostById'] = async (_, { postId }, { dataSources }) => {
    try {
      const postById = await dataSources.db.post.findUniqueOrThrow({
        where: {
          id: postId,
        }
      });
      return postById;
    } catch (error) {
      console.error('Failed to fetch post by id:', error);
      throw new Error('Failed to fetch post by id');
    }
  };
  