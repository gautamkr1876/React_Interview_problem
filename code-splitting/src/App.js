import React, { Suspense, useState } from "react";
const Hello = React.lazy(() => import("./Hello"));
const Photos = React.lazy(() => import("./multipleTab/Photos"));
const Comments = React.lazy(() => import("./multipleTab/Comment"));

export default function CodeSplitting() {
  const [tab, setTab] = useState("Photos");
  const onClickLoadDynamic = async () => {
    const res = await import("./DynamicImport");
    console.log(res.DynamicImport, "response");
  };

  // Avoid suspense transation like
  // Loading....

  return (
    <>
      <div className="App" onClick={onClickLoadDynamic}>
        Hello
        <Suspense fallback={<div>Loading...</div>}>
          <Hello />
        </Suspense>
      </div>
      <div
        onClick={() => {
          if (tab === "Photos") {
            setTab("Comment");
          } else {
            setTab("Photos");
          }
        }}
      >
        Switch Tab
        <Suspense fallback={<div>Loading photos ot comments ......</div>}>
          {tab === "Photos" ? <Photos /> : <Comments />}
        </Suspense>
      </div>
    </>
  );
}
