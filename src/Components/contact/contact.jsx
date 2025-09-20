import React from 'react'
import './contact.css'
import msg_icon from '../../assets/msg-icon.png'
import email_icon from '../../assets/email-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import address_icon from '../../assets/address-icon.png'


const contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dafd958f-ea26-4a3d-99b1-58265bd438ee");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send me a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to contact me for any inquiries or collaborations.</p>
            <ul>
                <li><img src={email_icon} alt="" />thejassivakumar@gmail.com</li>
                <li><img src={phone_icon} alt="" />+91 9188785404</li>
                <li><img src={address_icon} alt="" />Palakkad, Kerala</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name="name" placeholder='Enter your name' required />
                <label>Phone Number</label>
                <input type='tel' name="phone" placeholder='Enter your phone number' required />
                <label>Email</label>
                <input type="email" name="email" placeholder='Enter your email' required />
                <label>Message</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Send</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default contact