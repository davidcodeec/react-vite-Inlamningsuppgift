import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./src/views/Home";
import Contacts from "./src/views/Contacts";
import News from "./src/views/News";
import NewsDetails from "./src/views/NewsDetails";
import NotFound from "./src/views/NotFound";
import "./index.css";
import Services from "./src/views/Services";
import { ArticleProvider } from "./src/contexts/ArticleContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ArticleProvider>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetails />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </ArticleProvider>
    </BrowserRouter>
  </React.StrictMode>
);
