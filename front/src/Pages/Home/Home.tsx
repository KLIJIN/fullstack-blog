import Tabs from "@/Components/Tabs";
import TagsBlock from "@/Components/TagsBlock";
import CommentsBlock from "@/Components/CommentsBlock";
import PostBlock from "@/Components/PostBlock";
import Post from "@/Components/Post";

import styles from './Home.module.scss';

function Home() {
  return <div>
    <Tabs
      labelList={["Новые", "Популярные"]}
    />
    <div className={styles.content}>
      <PostBlock className={styles.main}>
        <Post
          id={1}
          key={1}
          title="Roast the code #1 | Rock Paper Scissors"
          imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
          user={{
            avatarUrl:
              'https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png',
            fullName: 'Keff',
          }}
          createdAt={'12 июня 2022 г.'}
          viewsCount={150}
          commentsCount={3}
          tags={['react', 'fun', 'typescript']}
          isEditable
        />

        <Post
          id={2}
          key={2}
          title="Roast the code #1 | Rock Paper Scissors"
          imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
          user={{
            avatarUrl:
              'https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png',
            fullName: 'Keff',
          }}
          createdAt={'15 июня 2023 г.'}
          viewsCount={150}
          commentsCount={3}
          tags={['react', 'fun', 'typescript']}
          isEditable
        />

      </PostBlock>
      <div className={styles.side}>
        <TagsBlock items={['react', 'typescript', 'заметки']} isLoading={false} />
        <CommentsBlock
          items={[
            {
              user: {
                fullName: 'Вася Пупкин',
                avatarUrl: 'https://mui.com/static/images/avatar/1.jpg',
              },
              text: 'Это тестовый комментарий',
            },
            {
              user: {
                fullName: 'Иван Иванов',
                avatarUrl: 'https://mui.com/static/images/avatar/2.jpg',
              },
              text: 'When displaying three lines or more, the avatar is not aligned at the top.',
            },
          ]}
          isLoading={false}
        />

      </div>
    </div>


    Home</div>
}


export default Home;