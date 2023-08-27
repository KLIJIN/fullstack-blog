export interface Posts {
  _id: string;
  title: string;
  text: string;
  tags: string[];
  viewsCount: number;
  user: {
    _id: string;
    fullName: string;
    avatarUrl: string;
  },
  imageUrl: string;
  createdAt: string;
}