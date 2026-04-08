import React from "react";

function Contact() {
  function handleForm(formData) {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
    
  }

  return (
    <>
      <section className="section-contact">
        <h2 className="container-title">Contact Us</h2>
        <div className="contact-wrapper container">
          <form action={handleForm}>
            <input
              type="text"
              required
              placeholder="enter your name"
              className="form-control"
              autoComplete="off"
              name="username"
            ></input>
            <input
              type="text"
              required
              
              placeholder="enter your email"
              className="form-control"
              autoComplete="off"
              name="email"
            ></input>
            <textarea
              className="form-control"
              required
              name="message"
              autoComplete="off"
              placeholder="enter your message"
              rows="10"
            ></textarea>
            <button type="submit" value="send">
              submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
