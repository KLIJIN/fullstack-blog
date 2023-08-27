export interface FullPost {
  data: null | {
    _id: string;
    title: string;
    text: string;
    tags: string[];
    viewsCount: number;
    user: {
    avatarUrl: string;
    fullName: string;
  };
    createdAt: string;
    updatedAt: string;
    imageUrl: string;
  };
  status: 'loading' | 'loaded' | 'error';
}