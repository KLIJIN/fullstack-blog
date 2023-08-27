
export interface PostProps {
  id: string;
  title: string;
  imageUrl: string;
  user: {
    avatarUrl: string;
    fullName: string;
  };
  createdAt: string;
  viewsCount: number;
  commentsCount: number;
  tags: string[];
  isEditable?: boolean;
  isFullPost?: boolean;
  children?: React.ReactNode;
}