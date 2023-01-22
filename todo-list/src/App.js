import "./styles.css";
import { useState } from "react";
const listData = [
  { id: "1", name: "gautam" },
  { id: "2", name: "amit" }
];
export default function App() {
  const [text, setText] = useState("");
  const [dataList, setList] = useState([]);
  const [editListData, setEdit] = useState();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <input
        type="submit"
        onClick={(e) => {
          let newlist = null;
          console.log(editListData, "editl;ist");
          if (editListData && editListData.value) {
            newlist = dataList.map((val) => {
              if (editListData.id === val.id) {
                val.value = text;
              }
              return val;
            });
            console.log(dataList, "dataList", newlist);
            setList(newlist);
          } else {
            newlist = { id: dataList.length + 1, value: text };
            setList([...dataList, newlist]);
          }
          setEdit(null);
          setText("");
        }}
      ></input>
      {(dataList || []).map((item, index) => (
        <div key={index}>
          <span> {index}</span>
          <span>{item.value}</span>
          <button
            onClick={(e) => {
              setEdit(item);
              setText(item.value);
            }}
          >
            {" "}
            Edit
          </button>
          <button
            onClick={() => {
              const newList = dataList.filter((v) => v.id !== item.id);
              setList(newList);
            }}
          >
            {" "}
            Del
          </button>
        </div>
      ))}
    </div>
  );
}
