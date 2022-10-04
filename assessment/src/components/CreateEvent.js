import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class CreateEvent extends Component {
  render() {
    return (
      <div>
      <br/>
      <h1 style={{textAlign: 'center',color:'#240D57'}}>Create Event</h1>
      <br/><br/>
      <div class="form-wrapper">
      <Form id="input-form">
        <Form.Group controlId="EventName">
          <Form.Label>Event Name</Form.Label><br/>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="HostName">
          <Form.Label>Host Name</Form.Label><br/>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="Date">
          <Form.Label>Date</Form.Label><br/>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group controlId="Location">
          <Form.Label>Location</Form.Label><br/>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="Event Photo">
          <Form.Label>Event Photo</Form.Label><br/>
          <Form.Control type="file" />
        </Form.Group>
        <br/><br/>
        <a href='/event'>
            <Button variant='danger' size="lg" block="block" className="mt-4">
          Next
        </Button> </a>
      </Form>
    </div>
      </div>
    )
  }
}
