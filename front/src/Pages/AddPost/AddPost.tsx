import React, {
  useEffect,
  useCallback,
  useState,
  useMemo,
  useRef
} from "react";
import { selectIsAuth } from "@/store/slices/auth/selectors";
import { setFile } from "@/store/slices/fullPost/requests";
import { useSelector } from "react-redux";
import axios from "@/axios";
import { useAppDispatch } from "@/store";
import SimpleMDE from "react-simplemde-editor";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "@/Components/Button";
import { getTags } from "@/shared/utils";

import "easymde/dist/easymde.min.css";
import styles from "./AddPost.module.scss";



function AddPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuth = useSelector(selectIsAuth);
  const [text, setText] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const inputFile = useRef<HTMLInputElement>(null);
  // const [selectedTab, setSelectedTab] = React.useState<"write" | "preview">("write");

  const options = useMemo(
    () => ({
      spellChecker: false,
      maxHeight: "400px",
      autofocus: true,
      placeholder: "Введите текст...",
      status: false,
      autosave: {
        uniqueId: "1",
        enabled: true,
        delay: 1000
      }
    }),
    []
  );


  const isEditable = useMemo(() => Boolean(id), [id]);

  const handleChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    debugger;
    try {
      if (e.target.files) {
        debugger;
        const formData = new FormData();
        const file = e.target.files[0];
        formData.append("image", file);
        const { payload } = await dispatch(setFile(formData));
        if (payload.url) {
          // debugger;
          await setImageUrl(`http://localhost:8000${payload.url}`);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (isEditable) {
      axios.get(`/posts/${id}`)
        .then((res) => {
          // eslint-disable-next-line no-debugger
          // debugger;
          const { title, text, imageUrl, tags } = res.data.doc;
          setTitle(title);
          setText(text);
          setImageUrl(imageUrl);
          setTags(tags);
        })
        .catch((err) => {
          alert(err);
        })
    }
  }, []);


  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  const onChange = useCallback((value: string) => {
    setText(value);
  }, []);

  const onSumbit = async () => {
    try {
      debugger;
      const fields = {
        title,
        text,
        tags: getTags(tags),
        imageUrl: imageUrl,
      };
      debugger;
      if (!isEditable) {
        const { data } = await axios.post("/posts", fields);
        navigate(`/posts/${data._id}`);
      } else {
        console.log("AAAAAAAAAAAAAAAAAAAA");
        axios.patch(`/posts/${id}`, fields);
        navigate(`/posts/${id}`);
      }

    } catch (err) {
      console.log(err);
    }
  };

  const onClickRemoveImage = () => {
    setImageUrl("");
  };


  return (
    <div className={styles.root}>
      <div>
        <Button
          variant="outlined"
          size="large"
          onClick={() => inputFile.current?.click()}
        >
          Загрузить превью
        </Button>
        <input type="file" onChange={handleChangeFile} hidden ref={inputFile} />
      </div>

      {imageUrl && (
        <div>
          <img
            className={styles.img}
            src={imageUrl}
            alt="Uploaded"
          />
          <div>
            <Button size="large" color="error" onClick={onClickRemoveImage}>
              Удалить картинку
            </Button>
          </div>
        </div>
      )}

      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          placeholder="заголовок статьи"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>

      <div className={styles.tagsContainer}>
        <input
          className={styles.tags}
          placeholder="Тэги"
          value={tags}
          onChange={(e) => {
            setTags(e.target.value);
          }}
        />
      </div>

      <div className={styles.textarea}>
        <SimpleMDE
          className={styles.editor}
          value={text}
          onChange={onChange}
          options={options}
        />
      </div>

      <div className={styles.buttons}>
        <Button
          variant="contained"
          className={styles.buttonCadel}
          onClick={onSumbit}
        >
          {isEditable ? "Редактировать" : "Опубликовать"}
        </Button>
        <Link to="/">
          <Button>Отмена</Button>
        </Link>
      </div>
    </div>
  );
}

export default AddPost;
