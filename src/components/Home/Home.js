import React from 'react';
import { Container } from 'react-bootstrap';

import './Home.css';

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        time: ''
      };
    }
  
    componentDidMount() {
      fetch("/time") 
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              time: result.time
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, time } = this.state;
      const formattedTime = Date(time);
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <Container className="Home">
            <h1>Work in progress :)</h1>
            <p>
              {formattedTime}
            </p>
          </Container>
        );
      }
    }
  }

  export default Home;