import React, { createContext, useContext, useState } from "react";

const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [currentGroup, setCurrentGroup] = useState(0);

  return (
    <ArticleContext.Provider
      value={{ articles, setArticles, currentGroup, setCurrentGroup }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticleContext = () => useContext(ArticleContext);
