import Tabs from "@/Components/Tabs";
import TagsBlock from "@/Components/TagsBlock";
import CommentsBlock from "@/Components/CommentsBlock";
import PostBlock from "@/Components/PostBlock";

import styles from './Home.module.scss';

function Home() {
  return <div>
    <Tabs
      labelList={["Новые", "Популярные"]}
    />
    <div className={styles.content}>
      <PostBlock className={styles.main}>
        <div>asf</div>
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