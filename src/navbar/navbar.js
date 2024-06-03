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
          <nav className={`${(scrolled && "scrolled-down shadow-lg") || (!scrolled && "navbar")} navbar-expand-md sticky-top `}>
            <div className="navbar container-fluid d-none d-md-flex row">
                
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