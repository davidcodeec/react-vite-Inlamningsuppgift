import React from "react";
import "./MessageSection.css";
import { Link } from "react-router-dom";

const MessageSection = () => {
  return (
    <>
      <section className="message-section">
        <div className="container">
          <div className="content">
            <div className="message-items">
              <div className="message-text">
                <h3>Leave us a message </h3>
                <h3>for any information.</h3>
              </div>
              <div>
                <form className="message-btns">
                  <div className="searchbox">
                    <input
                      type="text"
                      name="name"
                      value=""
                      placeholder="Name*"
                    />
                  </div>

                  <div className="searchbox">
                    <input
                      type="text"
                      name="email"
                      value=""
                      placeholder="Email*"
                    />
                  </div>

                  <textarea
                    className="message-textarea"
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Your Message*"
                  ></textarea>

                  <div className="center-content">
                    <Link className="btn-yellow" to="">
                      Send Message<i className="fa-solid fa-arrow-up-right"></i>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MessageSection;
