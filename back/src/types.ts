import { GraphQLResolveInfo } from 'graphql';
import { TrackModel, AuthorModel, FilmModel, PeopleModel } from './models';
import { DataSourceContext } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Comment = {
  __typename?: 'Comment';
  authorId: Scalars['String']['output'];
  comment: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  postId: Scalars['String']['output'];
};

export type CreateCommentResponse = {
  __typename?: 'CreateCommentResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type CreateLikeResponse = {
  __typename?: 'CreateLikeResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type CreatePostResponse = {
  __typename?: 'CreatePostResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type CreateUserResponse = {
  __typename?: 'CreateUserResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type DeleteCommentResponse = {
  __typename?: 'DeleteCommentResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type DeleteLikeResponse = {
  __typename?: 'DeleteLikeResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type DeletePostResponse = {
  __typename?: 'DeletePostResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment?: Maybe<CreateCommentResponse>;
  createLikePost?: Maybe<CreateLikeResponse>;
  createPost?: Maybe<CreatePostResponse>;
  createUser?: Maybe<CreateUserResponse>;
  deleteComment?: Maybe<DeleteCommentResponse>;
  deleteLikePost?: Maybe<DeleteLikeResponse>;
  deletePost?: Maybe<DeletePostResponse>;
  signIn?: Maybe<SignInResponse>;
  updateComment?: Maybe<UpdateCommentResponse>;
  updatePost?: Maybe<UpdatePostResponse>;
};


export type MutationCreateCommentArgs = {
  comment: Scalars['String']['input'];
  postId: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationCreateLikePostArgs = {
  postId: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationCreatePostArgs = {
  body: Scalars['String']['input'];
  title: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationDeleteCommentArgs = {
  commentId: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationDeleteLikePostArgs = {
  postId: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationDeletePostArgs = {
  postId: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationSignInArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationUpdateCommentArgs = {
  comment: Scalars['String']['input'];
  commentId: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationUpdatePostArgs = {
  body?: InputMaybe<Scalars['String']['input']>;
  postId: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};

export type Post = {
  __typename?: 'Post';
  authorId: Scalars['String']['output'];
  body: Scalars['String']['output'];
  comments?: Maybe<Array<Maybe<Comment>>>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  usersLikes?: Maybe<Array<Maybe<UserPostLikes>>>;
};

export type Query = {
  __typename?: 'Query';
  getLikesByPost?: Maybe<Array<UserPostLikes>>;
  getPostById: Post;
  getPosts: Array<Post>;
  getPostsByUser: Array<Post>;
};


export type QueryGetLikesByPostArgs = {
  postId: Scalars['String']['input'];
};


export type QueryGetPostByIdArgs = {
  postId: Scalars['String']['input'];
};


export type QueryGetPostsByUserArgs = {
  userId: Scalars['String']['input'];
};

export type SignInResponse = {
  __typename?: 'SignInResponse';
  code: Scalars['Int']['output'];
  id?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type UpdateCommentResponse = {
  __typename?: 'UpdateCommentResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type UpdatePostResponse = {
  __typename?: 'UpdatePostResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  posts?: Maybe<Array<Maybe<Post>>>;
  postsLikes?: Maybe<Array<Maybe<UserPostLikes>>>;
};

export type UserPostLikes = {
  __typename?: 'UserPostLikes';
  id: Scalars['ID']['output'];
  postId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Comment: ResolverTypeWrapper<Comment>;
  CreateCommentResponse: ResolverTypeWrapper<CreateCommentResponse>;
  CreateLikeResponse: ResolverTypeWrapper<CreateLikeResponse>;
  CreatePostResponse: ResolverTypeWrapper<CreatePostResponse>;
  CreateUserResponse: ResolverTypeWrapper<CreateUserResponse>;
  DeleteCommentResponse: ResolverTypeWrapper<DeleteCommentResponse>;
  DeleteLikeResponse: ResolverTypeWrapper<DeleteLikeResponse>;
  DeletePostResponse: ResolverTypeWrapper<DeletePostResponse>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Post: ResolverTypeWrapper<Post>;
  Query: ResolverTypeWrapper<{}>;
  SignInResponse: ResolverTypeWrapper<SignInResponse>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateCommentResponse: ResolverTypeWrapper<UpdateCommentResponse>;
  UpdatePostResponse: ResolverTypeWrapper<UpdatePostResponse>;
  User: ResolverTypeWrapper<User>;
  UserPostLikes: ResolverTypeWrapper<UserPostLikes>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Comment: Comment;
  CreateCommentResponse: CreateCommentResponse;
  CreateLikeResponse: CreateLikeResponse;
  CreatePostResponse: CreatePostResponse;
  CreateUserResponse: CreateUserResponse;
  DeleteCommentResponse: DeleteCommentResponse;
  DeleteLikeResponse: DeleteLikeResponse;
  DeletePostResponse: DeletePostResponse;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Post: Post;
  Query: {};
  SignInResponse: SignInResponse;
  String: Scalars['String']['output'];
  UpdateCommentResponse: UpdateCommentResponse;
  UpdatePostResponse: UpdatePostResponse;
  User: User;
  UserPostLikes: UserPostLikes;
};

export type CommentResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  authorId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  comment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  postId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCommentResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CreateCommentResponse'] = ResolversParentTypes['CreateCommentResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateLikeResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CreateLikeResponse'] = ResolversParentTypes['CreateLikeResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatePostResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CreatePostResponse'] = ResolversParentTypes['CreatePostResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CreateUserResponse'] = ResolversParentTypes['CreateUserResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteCommentResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['DeleteCommentResponse'] = ResolversParentTypes['DeleteCommentResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteLikeResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['DeleteLikeResponse'] = ResolversParentTypes['DeleteLikeResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeletePostResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['DeletePostResponse'] = ResolversParentTypes['DeletePostResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createComment?: Resolver<Maybe<ResolversTypes['CreateCommentResponse']>, ParentType, ContextType, RequireFields<MutationCreateCommentArgs, 'comment' | 'postId' | 'token'>>;
  createLikePost?: Resolver<Maybe<ResolversTypes['CreateLikeResponse']>, ParentType, ContextType, RequireFields<MutationCreateLikePostArgs, 'postId' | 'token'>>;
  createPost?: Resolver<Maybe<ResolversTypes['CreatePostResponse']>, ParentType, ContextType, RequireFields<MutationCreatePostArgs, 'body' | 'title' | 'token'>>;
  createUser?: Resolver<Maybe<ResolversTypes['CreateUserResponse']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'email' | 'name' | 'password'>>;
  deleteComment?: Resolver<Maybe<ResolversTypes['DeleteCommentResponse']>, ParentType, ContextType, RequireFields<MutationDeleteCommentArgs, 'commentId' | 'token'>>;
  deleteLikePost?: Resolver<Maybe<ResolversTypes['DeleteLikeResponse']>, ParentType, ContextType, RequireFields<MutationDeleteLikePostArgs, 'postId' | 'token'>>;
  deletePost?: Resolver<Maybe<ResolversTypes['DeletePostResponse']>, ParentType, ContextType, RequireFields<MutationDeletePostArgs, 'postId' | 'token'>>;
  signIn?: Resolver<Maybe<ResolversTypes['SignInResponse']>, ParentType, ContextType, RequireFields<MutationSignInArgs, 'email' | 'password'>>;
  updateComment?: Resolver<Maybe<ResolversTypes['UpdateCommentResponse']>, ParentType, ContextType, RequireFields<MutationUpdateCommentArgs, 'comment' | 'commentId' | 'token'>>;
  updatePost?: Resolver<Maybe<ResolversTypes['UpdatePostResponse']>, ParentType, ContextType, RequireFields<MutationUpdatePostArgs, 'postId' | 'token'>>;
};

export type PostResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  authorId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  usersLikes?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserPostLikes']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getLikesByPost?: Resolver<Maybe<Array<ResolversTypes['UserPostLikes']>>, ParentType, ContextType, RequireFields<QueryGetLikesByPostArgs, 'postId'>>;
  getPostById?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<QueryGetPostByIdArgs, 'postId'>>;
  getPosts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType>;
  getPostsByUser?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryGetPostsByUserArgs, 'userId'>>;
};

export type SignInResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['SignInResponse'] = ResolversParentTypes['SignInResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCommentResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['UpdateCommentResponse'] = ResolversParentTypes['UpdateCommentResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdatePostResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['UpdatePostResponse'] = ResolversParentTypes['UpdatePostResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  posts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Post']>>>, ParentType, ContextType>;
  postsLikes?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserPostLikes']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserPostLikesResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['UserPostLikes'] = ResolversParentTypes['UserPostLikes']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  postId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = DataSourceContext> = {
  Comment?: CommentResolvers<ContextType>;
  CreateCommentResponse?: CreateCommentResponseResolvers<ContextType>;
  CreateLikeResponse?: CreateLikeResponseResolvers<ContextType>;
  CreatePostResponse?: CreatePostResponseResolvers<ContextType>;
  CreateUserResponse?: CreateUserResponseResolvers<ContextType>;
  DeleteCommentResponse?: DeleteCommentResponseResolvers<ContextType>;
  DeleteLikeResponse?: DeleteLikeResponseResolvers<ContextType>;
  DeletePostResponse?: DeletePostResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SignInResponse?: SignInResponseResolvers<ContextType>;
  UpdateCommentResponse?: UpdateCommentResponseResolvers<ContextType>;
  UpdatePostResponse?: UpdatePostResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserPostLikes?: UserPostLikesResolvers<ContextType>;
};

