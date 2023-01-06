import React from "react";

import test from "./_posts/test.md";

const App = () => {
  return <div dangerouslySetInnerHTML={{ __html: test }} />;
};

export default App;
