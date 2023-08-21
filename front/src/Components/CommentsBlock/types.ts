export interface CommentsBlockProps {
  items: {
    user: {
      fullName: string,
      avatarUrl: string,
    };
    text: string;
  }[];
  isLoading: boolean;
}
