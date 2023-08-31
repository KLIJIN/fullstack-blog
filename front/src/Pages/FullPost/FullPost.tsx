import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useAppDispatch } from "@/store";
import { getFullPost } from "@/store/slices/fullPost/requests";
import { selectFullPost } from "@/store/slices/fullPost/selectors";
import AddComment from "@/Components/AddComment";
import CommentsBlock from "@/Components/CommentsBlock";
import Post from "@/Components/Post";

function FullPost() {
  const dispatch = useAppDispatch();
  const { data } = useSelector(selectFullPost);
  const { id } = useParams();

  useEffect(() => {
    if (id) dispatch(getFullPost(id));
  }, [id, dispatch]);

  if (!id || !data) {
    return "...Loading";
  }

  const {
    _id,
    title,
    text,
    imageUrl,
    tags,
    viewsCount,
    user,
    createdAt
  } = data;

  return (
    <div>
      {data && (
        <Post
          id={_id}
          title={title}
          imageUrl={imageUrl}
          user={user}
          createdAt={new Date(createdAt).toDateString()}
          viewsCount={data.viewsCount}
          commentsCount={viewsCount}
          tags={tags}
          isFullPost
        >
          <ReactMarkdown children={text} />
        </Post>
      )}
      <CommentsBlock
        items={[
          {
            user: {
              fullName: "Вася Петров",
              avatarUrl: "https://mui.com/static/images/avatar/1.jpg"
            },
            text: "тестовый комментарий"
          },
          {
            user: {
              fullName: "Иван Иванов",
              avatarUrl: "https://mui.com/static/images/avatar/2.jpg"
            },
            text:
              "When displaying three lines or more, the avatar is not aligned at the top"
          }
        ]}
        isLoading={false}
      >
        <AddComment />
      </CommentsBlock>
    </div>
  );
}

export default FullPost;
