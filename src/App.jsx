import React from "react";
import { marked } from "marked";

const App = () => {
  const markedParse = marked.parse("# Marked Test");

  return <div dangerouslySetInnerHTML={{ __html: markedParse }} />;
};

export default App;
