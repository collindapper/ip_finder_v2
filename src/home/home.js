import React from 'react';
import Flip from 'react-reveal/Fade';
import './home.css';

// Custom imports
//import MatrixBackground from '../matrixBackground';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userProjects: [],
    }
  }

  render () {
    return (
      <React.Fragment>
        <div className='container homePage'>
          <div className='headingWrapper d-flex mx-auto'>
            <h1 className="container heading fontPrimary display-1 text-center my-auto">IP FINDER</h1>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home;
