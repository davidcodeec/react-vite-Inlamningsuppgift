import React from 'react'
import './MessageSection.css'

const MessageSection = () => {
  return (
    <>
        <section class="message-section">

            <div class="container">
                <div class="content">
                    <div class="message-items">
                        <div class="message-text">
                            <h3>Leave us a message </h3>
                            <h3>for any information.</h3>
                        </div>
                        <div>
                            <form class="message-btns">
                                <div class="searchbox">
                                    <input type="text" name="name" value="" placeholder="Name*"/>
                                </div>

                                <div class="searchbox">
                                    <input type="text" name="email" value="" placeholder="Email*"/>
                                </div>

                                <textarea class="message-textarea" name="message" id="" cols="30" rows="10"
                                    placeholder="Your Message*"></textarea>

                                <div class="center-content">
                                    <a class="btn-yellow" href="">Send Message<i class="fa-solid fa-arrow-up-right"></i></a>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

</section> 
    </>
  )
}

export default MessageSection