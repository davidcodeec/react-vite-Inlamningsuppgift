import React, { useState } from "react";
import "./MessageSection.css";

const MessageSection = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false);

  const handleChange = (e,fieldName) => {
    switch (fieldName) {
      case "name":
        setName(e.target.value);
        setNameError(validateName(e.target.value));
        break;
      case "email":
        setEmail(e.target.value);
        setEmailError(validateEmail(e.target.value));
        break;
      case "message":
        setMessage(e.target.value);
        setMessageError(validateMessage(e.target.value));
        break;
        default:
        break;
    }
  };

  const validateLength = (value, minLength = 1) => {
    return value !== "" && value.length >= minLength;
  };

  const validateNameFormat = (value) => {
    const regexName = /^[a-zA-Z\s\-]+$/;
    return regexName.test(value);
  };

  // Validation for the Name
  const validateName = (value) => {
    const minLength = 2; // Minimum length requirement

    if (!validateLength(value, minLength)) {
      return "You must enter a name";
    }

    if (!validateNameFormat(value)) {
      return "You must enter a valid name with only letters, spaces, and hyphens";
    }

    return ''; // Validation succeeded
  };

  // Validation for the Email
  function validateEmailFormat(value) {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regexEmail.test(value);
  }

  // Validation for the Name
  const validateEmail = (value) => {
    const minLength = 2; // Minimum length requirement

    if (!validateLength(value, minLength)) {
      return "You must enter a email";
    }

    if (!validateEmailFormat(value)) {
      return "You must enter a valid email";
    }

    return ''; // Validation succeeded
  };


  const validateMessageFormat = (value) => {
    const regexMessage = /[\s\S]*/;
    return regexMessage.test(value);
  };

  // Validation for the Name
  const validateMessage = (value) => {
    const minLength = 2; // Minimum length requirement

    if (!validateLength(value, minLength)) {
      return "You must enter a message";
    }

    if (!validateMessageFormat(value)) {
      return "You must enter a valid message";
    }

    return ''; // Validation succeeded
  };

  const handleBlur = (field) => {
    switch (field) {
      case "name":
        setNameError(validateName(name));
        break;
      case "email":
        setEmailError(validateEmail(email));
        break;
      case "message":
        setMessageError(validateMessage(message));
        break;
      default:
        break;
    }
  };
  

  const handleFocus = () => {
    setNameError(false);
    // Add similar logic for other fields if needed
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //setErrorMessage('')

    if (nameError || emailError || messageError) {
      // Display an error message or perform other actions
      console.log("Validation errors. Form not submitted.");
      return;
    }

    const contactDetails = {
      name: name,
      email: email,
      message: message,
    };

    const json = JSON.stringify(contactDetails);
    //console.log(json);
   
    try {
      const apiUrl = "https://win23-assignment.azurewebsites.net/api/contactform";

      const result = await fetch(apiUrl, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },

        body: json,
      });

      const responseBody = await result.text(); // Get the response body as text

      //console.log('Response Body:', responseBody);

      clearForm();

      try {
        if (result.status === 201) {
          document.getElementById(
            "status-messages"
          ).innerHTML = `<div class="alert alert-success" role="alert">User message was sent successfully!</div>`;
          //console.log(data);
        } else {
          // Display an error message based on the server response body
          const data = responseBody;
          //console.log(data);

          if (result.status >= 200 && result.status < 300) {
            document.getElementById(
              "status-messages"
            ).innerHTML = `<div class="alert alert-success" role="alert">${
              responseBody || "User message was sent successfully!."
            }</div>`;
          } else {
            document.getElementById(
              "status-messages"
            ).innerHTML = `<div class="alert alert-danger" role="alert">${
              data.error ||
              "An error occurred, user message was not sent successfully!."
            }</div>`;
          }
        }
      } catch (error) {
        //console.error('Error parsing JSON:', error);
      }
    } catch (error) {
      // Handle network errors and fetch-related errors here.
      //document.getElementById("status-messages").innerHTML = `<div class="alert alert-danger" role="alert">${error.message}!</div>`;
      //console.error(error);
    }
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <section className="message-section">
        <div className="container">
          <div className="content">
            <div className="message-items">
              <div className="message-text">
                <h3>Leave us a message </h3>
                <h3>for any information.</h3>
                <div id="status-messages"> </div>
              </div>

              <div>
                <form
                  onSubmit={handleSubmit}
                  className="message-btns"
                  noValidate
                >
                  <div className="message-btns-spacing">
                    <div
                      className={`error-container ${nameError ? "error" : ""}`}
                    >
                      <span>{`Name ${nameError ? nameError : ""}`}</span>
                      <div className="inputbox">
                        <input
                          type="text"
                          name="name"
                          value={name}
                          placeholder="Name*"
                          //onChange={(e) => handleChange(e)}
                          onChange={(e) => handleChange(e, "name")}
                          onBlur={() => handleBlur("name")}
                          onFocus={handleFocus}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="message-btns-spacing">
                  <div
                      className={`error-container ${emailError ? "error" : ""}`}
                    >
                      <span>{`Email ${emailError ? emailError : ""}`}</span>
                      <div className="inputbox">
                        <input
                          type="text"
                          name="email"
                          value={email}
                          placeholder="Email*"
                          //onChange={(e) => handleChange(e)}
                          onChange={(e) => handleChange(e, "email")}
                          onBlur={() => handleBlur("email")}
                          onFocus={handleFocus}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="message-btns-spacing">
                  <div
                      className={`error-container ${messageError ? "error" : ""}`}
                    >
                      <span>{`Message ${messageError ? messageError : ""}`}</span>
                      <textarea
                        className="message-textarea"
                        type="text"
                        name="message"
                        value={message}
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Your Message*"
                        //onChange={(e) => handleChange(e)}
                        onChange={(e) => handleChange(e, "message")}
                        onBlur={() => handleBlur("message")}
                        onFocus={handleFocus}
                      ></textarea>
                    </div>
                  </div>

                  <div className="center-content">
                    <button className="btn-yellow" type="submit">
                      {" "}
                      Send Message<i className="fa-solid fa-arrow-up-right"></i>
                    </button>
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
