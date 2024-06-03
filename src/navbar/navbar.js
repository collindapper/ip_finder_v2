import React from 'react';
import './navbar.css';

// Custom imports

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render () {
    const { navbarOpen, scrolled } = this.state;
    
    return (
      <React.Fragment>
          <nav className='navbar sticky-top'>
            <div className="d-flex container-fluid justify-content-end">
              <a className='links fontPrimary me-3 display-6 text-end' href='https://github.com/collindapper' target='_blank'><i className="fa-brands fa-github"></i></a>
              <a className='links fontPrimary py-auto' href='https://www.collindapper.com' target='_blank'><img className='websiteImg' src={require('../images/transparent background.png')} /></a>
            </div>
          </nav>
          
          
          <div id="mainContent" className="mainContent mb-3">
            {this.props.children}
          </div>

          {/* Footer */}
          <footer className="sticky-bottom mt-5">
            <div className="container-fluid footer">
              <div className="d-flex row">
                <div className="col-6">
                  <p className="footerItem">&copy; Collin Dapper - IP Finder v1</p>
                </div>
                
              </div>
            </div>
          </footer>
      </React.Fragment>
    )
  }
}

export default Navbar;