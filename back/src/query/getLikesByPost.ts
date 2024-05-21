import { QueryResolvers } from '../types';

export const getLikesByPost: QueryResolvers['getLikesByPost'] = async (_, { postId }, { dataSources }) => {
    try {
      const LikesByPost = await dataSources.db.userPostLikes.findMany({
        where: {
          postId: postId,
        },
        select: {
            id: true,
            userId: true,
            postId: true,
        },
      });
      return LikesByPost;
    } catch (error) {
      console.error('Failed to fetch likes by post:', error);
      throw new Error('Failed to fetch likes by post');
    }
  };
  