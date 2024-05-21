
export type Comment = {
    authorId: string;
    comment: string;
    id: string;
    postId: string;
  };

  
export type Post = {
    id: string;
    title: string;
    body: string;
    authorId: string;
    comments: Comment[]
    usersLikes: UserPostLikes[]
  }

export type UserPostLikes = {
    id: string;
    postId: string;
    userId: string;
}
