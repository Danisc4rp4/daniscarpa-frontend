import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

import './Login.css';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  
  render() {
    return (
      <Container className="Login">
        <div>
          <h1>Hey you have an account, that's cool! Please Login.</h1>
          <a href="/Register">No, I don't! I want to Register.</a>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="FormGroup" controlId="formGroupEmail">
              <Form.Label className="FormLabel">Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted FieldInfo">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="FormGroup" controlId="formGroupPassword">
              <Form.Label className="FormLabel">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    );
  }
}

export default Login;