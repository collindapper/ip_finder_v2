import React from 'react';
import Fade from 'react-reveal/Fade';
import './home.css';

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
        <div className='container border'>
            <div className='magnifyingGlass'></div>
            <h1>IP Finder V1</h1>
        </div>
      </React.Fragment>
    )
  }
}

export default Home;
