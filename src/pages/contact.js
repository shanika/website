import React from "react"
import { Form, Card, Button } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Tip from "../components/tip"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact us" />
    <h1>Contact us</h1>
    <p className="lead">
      Contact us with any questions you have about support groups, our mission
      or anything COVID-19 response related:
    </p>
    <Card>
      <Card.Body>
        <Form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="name" placeholder="Full Name" required />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="subject" placeholder="Subject" required />
          </Form.Group>

          <Form.Group controlId="formBasicContent">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Enter your message"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </Card.Body>
    </Card>
  </Layout>
)

export default ContactPage
