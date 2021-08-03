import React from "react"
import emailjs from "emailjs-com"
import { Form } from "./styles"
import Button from "../Button"

// import "./ContactUs.css"

export default function ContactMe() {
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_rg1fo8m",
        "template_gaqf5sf",
        e.target,
        "user_2iwWkCjz13JXx3VyJ22hc"
      )
      .then(
        result => {
          console.log(result)
        },
        error => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  return (
    <Form>
      <h2 id="contact-me">Contact me</h2>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write here your message"
        />
        <Button type="submit" width="100%">
          Send
        </Button>
      </form>
    </Form>
  )
}
