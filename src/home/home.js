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
        <div className='container animation'>
          <h1 className="display-1">IP Finder</h1>
        </div>
      </React.Fragment>
    )
  }
}

export default Home;
