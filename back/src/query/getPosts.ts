import { QueryResolvers } from '../types';

export const getPosts: QueryResolvers['getPosts'] = async (_, __, { dataSources }) => {
  try {
    const posts = await dataSources.db.post.findMany();
    return posts;
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    throw new Error('Failed to fetch posts');
  }
};
