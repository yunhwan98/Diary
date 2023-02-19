import "./App.css";

import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import { useRef, useState } from "react";

// const dummyList = [
//   {
//     id: 1,
//     author: "박윤환",
//     content: "하이 2",
//     emotion: 5,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "김소정",
//     content: "하이 3",
//     emotion: 2,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "홍길동",
//     content: "하이 4",
//     emotion: 3,
//     created_date: new Date().getTime(),
//   },
// ];

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}></DiaryEditor>
      <DiaryList diaryList={data}></DiaryList>
    </div>
  );
}

export default App;
