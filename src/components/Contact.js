import React from 'react'
import Header from "./header"
import Footer from "./footer"

const Contact = () => (

    <div id="contact-wrapper" className="contact-wrapper">
        <div className="container">
            <div className="row">
                <div className="offset-md-6 col-sm-12 col-md-6">
                    <div className="contact-form">
                        <h2>Get in touch</h2>
                        <h3>We'd love to hear from you!</h3>
                        <p>Fill out the form below and we'll contact you later.</p>

                        <div className="contact-info">
                            <p><span className="icon email"></span><a href="">jamielewis@gmail.com</a></p>
                            <p><span className="icon phone"></span><a href="">+12 678 5435</a></p>
                            <p><span className="icon location"></span>46 Kingsway Stroke on Trent <br /> STB2 31X </p>
                        </div>
                        <form 
                            method="POST" 
                            name="contact"
                            action=""
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                        >
                            <input type="hidden" name="bot-field" />
                            <input type="hidden" name="form-name" value="contact" />
                            <div className="form-group">
                                <label for="fullname">Name</label>
                                <input type="text" className="form-control" id="fullname" aria-describedby="fullName" placeholder="Enter full name" />
                            </div>
                            <div className="form-group">
                                <label for="emailaddress">Email address</label>
                                <input type="email" className="form-control" id="emailaddress" aria-describedby="emailHelp" placeholder="Enter email address" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Message</label>
                                <textarea className="form-control" rows="5" />
                            </div>
                            <button type="submit" class="btn btn-primary">Send message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

)


export default Contact