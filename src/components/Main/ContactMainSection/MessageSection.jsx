import React, { useState } from "react";
import "./MessageSection.css";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const MessageSection = () => {
  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'You must enter a valid name')
        .required('You must enter a name'),
      email: Yup.string()
        .email('You must enter a valid e-postaddress')
        .required('Email is required'),
      message: Yup.string()
        .min(2,'Message must consist of 2 characters or more')
        .required('Message is required'),
    }),


    onSubmit: values => {
      console.log(values)
    },
  });

  return (
    <>
      <section className="message-section">
        <div className="container">
        <div id="status-messages"> </div>
          <div className="content">
            <div className="message-items">
              <div className="message-text">
                <h3>Leave us a message </h3>
                <h3>for any information.</h3>
              </div>
              <div>

               
                <form onSubmit={form.handleSubmit} className="message-btns" noValidate>

                <div className="message-btns-spacing">  
                <label> {form.errors.name ? form.errors.name : 'Name'} </label>
                  <div className="inputbox">
                    <input
                      type="text"
                      name="name"
                      value={form.values.name}
                      placeholder="Name*"
                      onChange={form.handleChange}
                    />
                  </div>
                  </div>


                  <div className="message-btns-spacing">
                  <label> {form.errors.email ? form.errors.email : 'Email'} </label>
                  <div className="inputbox">
                    <input
                      type="text"
                      name="email"
                      value={form.values.email}
                      placeholder="Email*"
                      onChange={form.handleChange}
                    />
                  </div>
                  </div>

                  <div className="message-btns-spacing">
                  <label> {form.errors.message ? form.errors.message : 'Message'} </label>  
                  <textarea className="message-textarea"
                    type="text"
                    name="message"
                    value={form.values.message}
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Your Message*"
                    onChange={form.handleChange}
                  ></textarea>
                  </div>
                  

                  <div className="center-content">
                  <button className="btn-yellow" type="submit"> Send Message<i className="fa-solid fa-arrow-up-right"></i></button>
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
