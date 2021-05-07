export interface IPosts {
  id: string;
  title: string;
  content?: string;
  link: string;
  author: {
    id: string;
    name: string;
    username: string;
    avatar?: string;
  };
}

export interface IAuthorsGroups {
  authorId: string;
  authorPosts: Array<IPosts>;
}
