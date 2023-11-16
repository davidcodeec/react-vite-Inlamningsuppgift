import React from "react";
import { Link } from "react-router-dom";

const ArticleNewsSectionBox = ({
  id,
  title,
  category,
  content,
  imageUrl,
  published,
}) => {
  function formatDate(dateString) {
    const options = { day: "numeric", month: "short" };

    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-GB",
      options
    );

    return formattedDate;
  }

  const formattedDate = formatDate(published);

  // Split the formatted date into day and month
  const [day, month] = formattedDate.split(" ");

  return (
    <>
      <Link to={`/news/${id}`} className="text-decoration-none">
        <div
          className="image-spacing-text row g-9"
          style={{ gap: "1rem", marginBottom: "1rem" }}
        >
          <div className="date col-12 col-md-3">
            <h3>{day}</h3>
            <p>{month}</p>
          </div>
          <div className="col-12 col-md-9">
            <img
              src={imageUrl}
              alt={title}
              className="img-fluid"
              style={{
                width: "100%",
                height: "260px",
                marginBottom: "1rem",
                objectFit: "cover",
              }}
            />
            <div className="">
              <p>{title}</p>
              <h3>{category}</h3>
              <p>{content}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ArticleNewsSectionBox;
