import Tabs from "@/Components/Tabs";
import TagsBlock from "@/Components/TagsBlock";

import styles from './Home.module.scss';

function Home() {
  return <div>
    <Tabs
      labelList={["Новые", "Популярные"]}
    />
    <div className={styles.content}>
      <div className={styles.main}>one</div>
      <div className={styles.side}>
        <TagsBlock items={['react', 'typescript', 'заметки']} isLoading={false} />

      </div>
    </div>


    Home</div>
}


export default Home;