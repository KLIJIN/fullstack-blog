import React, { useCallback, useState, useMemo } from 'react'
import SimpleMDE from 'react-simplemde-editor';
import Button from '@/Components/Button';

import 'easymde/dist/easymde.min.css';
import styles from './AddPost.module.scss';



function AddPost() {

  const imageUrl = '';
  const [value, setValue] = useState<string>('');
  // const [selectedTab, setSelectedTab] = React.useState<"write" | "preview">("write");

  const handleChangeFile = () => { };

  const onClickRemoveImage = () => { };

  const onChange = useCallback((value: string) => {
    setValue(value);
  }, []);

  const options = useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Введите текст...',
      status: false,
      autosave: {
        uniqueId: '1',
        enabled: true,
        delay: 1000,
      },
    }),
    [],
  );


  return (
    <div className={styles.root}>

      <Button variant="outlined" size="large">
        Загрузить превью
      </Button>
      <input type="file" onChange={handleChangeFile} hidden />

      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          placeholder="заголовок статьи"
        />
      </div>

      <div className={styles.tagsContainer}>
        <input
          className={styles.tags}
          placeholder="Тэги"
        />
      </div>

      <div className={styles.textarea}>
        <SimpleMDE className={styles.editor}
          value={value} onChange={onChange} options={options} />
      </div>

      <div className={styles.buttons}>
        <Button variant="contained" className={styles.buttonCadel}>
          Опубликовать
        </Button>
        <a href="/">
          <Button >Отмена</Button>
        </a>
      </div>

    </div>
  )
}


export default AddPost;