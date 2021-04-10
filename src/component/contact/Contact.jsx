import React, { Component } from "react";
import "./Contact.css";
import Icon from "../socialMedia/Icon";
import CkeckListForm from "../contact/Form/CkeckListForm";

class Contact extends Component {
  render() {
    return (
      <>
        <section id="container">
          <div className="inner-semi-left">
            <div className="contact-title">
              <h2>We’re here</h2>
              <p>Our door is always open for a good cup of coffee.</p>
            </div>
            <div className="offc-address">
              <h4>Our Office</h4>
              <p>
                Jacob van Lennepkade 334-H <br></br>1053 NJ Amsterdam <br></br>
                The Netherlands 🇳🇱
              </p>
              <Icon />
            </div>
          </div>
          <div className="inner-semi-right">
            <div className="inner-form-heading">
              <h2>Let's talk.</h2>
              <p>Share your excitement with us.</p>
              <a className="effect" href="mailto:info@gmail.com">
                info@gmail.com
                <span>
                  <i className="fas fa-arrow-right"></i>
                </span>
              </a>
            </div>
            <div className="form-list">
              <h4>Let's talk about</h4>
              <CkeckListForm />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Contact;
