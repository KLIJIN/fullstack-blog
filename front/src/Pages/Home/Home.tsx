import { useEffect } from "react";
import { useAppDispatch } from "@/store";
import { useSelector } from "react-redux";
import { selectPosts } from "@/store/slices/posts/selectors";
import Tabs from "@/Components/Tabs";
import TagsBlock from "@/Components/TagsBlock";
import CommentsBlock from "@/Components/CommentsBlock";
import PostBlock from "@/Components/PostBlock";
import Post from "@/Components/Post";
import { getPosts, getTags } from "@/store/slices/posts/requests";
import { selectAuthData } from "@/store/slices/auth/selectors";

import styles from "./Home.module.scss";

function Home() {
  const dispatch = useAppDispatch();
  const { posts, tags } = useSelector(selectPosts);
  const auth = useSelector(selectAuthData);
  const postList = posts.items;
  const tagsList = tags.items;
  const { userData } = auth.data;

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getTags());
  }, [dispatch, userData]);

  return (
    <div>
      <Tabs labelList={["Новые", "Популярные"]} />
      <div className={styles.content}>
        <PostBlock className={styles.main}>
          {postList &&
            postList.map((el) => {
              return (
                <Post
                  id={el._id}
                  key={el._id}
                  title={el.title}
                  imageUrl={el?.imageUrl || ""}
                  user={el.user}
                  createdAt={new Date(el.createdAt).toDateString()}
                  viewsCount={el.viewsCount}
                  commentsCount={150}
                  tags={el.tags}
                  isEditable={el.user._id === userData?._id}
                />
              );
            })}
        </PostBlock>
        <div className={styles.side}>
          <TagsBlock items={tagsList} isLoading={false} />
          <CommentsBlock
            items={[
              {
                user: {
                  fullName: "Вася Петров",
                  avatarUrl: "https://mui.com/static/images/avatar/1.jpg"
                },
                text: "Это тестовый комментарий"
              },
              {
                user: {
                  fullName: "Иван Иванов",
                  avatarUrl: "https://mui.com/static/images/avatar/2.jpg"
                },
                text:
                  "When displaying three lines or more, the avatar is not aligned at the top."
              }
            ]}
            isLoading={false}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
