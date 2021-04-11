import React from "react";
import { useFormik } from "formik";
import "./MainForm.css";

const MainForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (value) => {
    //   alert("Message successfully Submitted");
    },
    validate: (values) => {
      let errors = {};

      if (!values.name) {
        errors.name = "Required";
      }
      if (!values.email) {
        errors.email = "Email Required";
      }
      // else(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(values.email))
      // {errors.email="Invalid Email Format"}
      if (!values.message) {
        errors.message = "Required";
      }
    },
  });

  return (
    <>
      <div className="second-inner-page">
        <div className="title">
          <h2>Let's Plan a video call! 🎥</h2>
        </div>
        <div className="form-title">
          <h4>Personal details</h4>

          <form onSubmit={formik.handleSubmit}>
            {/* <label htmlFor='name'>Name</label>
            <input type="text" id="name" name="name"onChange={formik.handleChange} value={formik.value.name} />

            <label htmlFor='email'>Email</label>
            <input type="text" id="email" name="email" onChange={formik.handleChange} value={formik.value.email}/>

            <label htmlFor='message'>Message</label>
            <input type="text" id="message" name="message"onChange={formik.handleChange} value={formik.value.message} /> */}

            {/* <label htmlFor='name'></label> */}
            <div className="input-left">
              <input type="text" id="name" name="name" placeholder="Name" />

              {/* <label htmlFor='email'></label> */}
              <input type="text" id="email" name="email" placeholder="Email" />
            </div>
            <div className="input-right">
              <input
                type="text"
                id="message"
                name="message"
                placeholder="Message"
              />
              <button type="submit">Send Inquiry</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MainForm;
