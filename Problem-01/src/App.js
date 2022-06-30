import "./styles.css";
import objectData from "./objectData";
export default function App() {
  return (
    <div
      style={{ margin: "auto", width: "70%", paddingTop: 40 }}
      className="App"
    >
      <DisplayObject object={objectData}></DisplayObject>
    </div>
  );
}

const DisplayObject = ({ object }) => {
  console.log(Object.entries(object));
  return (
    <>
      {Object.entries(object).map(([key, value]) => {
        if (typeof value === "object") {
          return (
            <>
              <p>{`${key}: `}</p>
              <div style={{ paddingLeft: 50 }}>
                <DisplayObject object={value}></DisplayObject>
              </div>
            </>
          );
        } else {
          return <p>{`${key}: ${value}`}</p>;
        }
      })}
    </>
  );
};
