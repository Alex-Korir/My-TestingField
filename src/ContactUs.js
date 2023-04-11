import React from 'react'
import "./contactUs.css"

function ContactUs() {
  return (
    <div className='contact-us-container'>
        <div className='contact-us-container'>
            <h1>CONTACT US</h1>
            <input type='text' placeholder='First Name'/>
            <input type='text' placeholder='Last Name'/>
            <input type='email' placeholder='Email'/>
            <input type='text' placeholder='Phone Number'/>
            <input type='text' placeholder='Message'/>
            <button>Submit</button>
        </div>
    </div>
  )
}

export default ContactUs