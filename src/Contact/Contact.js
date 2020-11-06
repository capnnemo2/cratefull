import React from "react";

function Contact() {
  function handleSubmitMessage(e) {
    console.log(e.target.name.value, e.target.email.value, e.target.msg.value);
    // this needs to POST to backend
    /* fetch(backend/api, {
        method: 'POST',
        body: JSON.stringify(e.target.name.value, e.target.email.value, e.target.msg.value),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(res=>res.json())
    .then(res=> {
        if(res.status === 'success') {
            alert('Message sent.)
            resetForm()
        } else if (res.status === 'fail) {
            alert("Message failed to send.")
        }
    })

    */
    //    Nodemailer?
  }

  // TODO if request delivery is checked, a new form appears with input fields like number of family members, etc

  return (
    <div className="Contact">
      <h2>Contact Us</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmitMessage(e);
        }}
      >
        <div className="form-group">
          <label>
            Name: <input type="text" name="name" />
          </label>
        </div>
        <div className="form-group">
          <label>
            Email:{"  "}
            <input type="email" name="email" />
          </label>
        </div>
        <div className="form-group">
          Subject:
          <label>
            <input type="radio" name="subject" value="donate" />
            Donate
          </label>
          <label>
            <input type="radio" name="subject" value="volunteer" />
            Volunteer
          </label>
          <label>
            <input type="radio" name="subject" value="help" />
            Request Delivery
          </label>
          <label>
            <input type="radio" name="subject" value="other" />
            Other
          </label>
        </div>
        <div className="form-group">
          <label>
            Message:{"  "}
            <textarea rows={5} name="msg" />
          </label>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
