import React, { useState, useEffect } from "react";

import posts from "./_posts/posts.json";

const App = () => {
  const PATH = "./_posts/";
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const postList = posts.map((post) => import(`${PATH}${post}`));

    Promise.all(postList).then((post) => {
      setPostList(post.map((res) => res.default));
    });
  }, []);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: postList[0] }} />
      <div dangerouslySetInnerHTML={{ __html: postList[1] }} />
    </>
  );
};

export default App;
