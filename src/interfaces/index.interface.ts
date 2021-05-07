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
  authorPosts: IPosts[];
}

export interface ICards {
  id: number;
  name: string;
  type: string;
  title?: string;
  source?: string;
  content?: string;
  sub_cards?: {
    id: number;
    name: string;
    type: string;
    source?: string;
  }[];
}
