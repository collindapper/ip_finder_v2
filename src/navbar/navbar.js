import React from 'react';
import './navbar.css';

// Custom imports

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navbarOpen: false,
      scrolled: false,
      scrollPosition: window.scrollY,
    }
  }

  componentDidMount = () => {
    console.log(this.state.scrollPosition);
    console.log(window.scrollY);

    this.setState({
      scrollPosition: window.scrollY,
    })
    
    document.addEventListener('scroll', this.toggleScrollDown);
  }

  toggleNavbarOpen = () => {
    this.setState({
      navbarOpen: !this.state.navbarOpen,
    })
  }

  toggleScrollDown = () => {
    if (window.scrollY > 0) {
      this.setState({
        scrolled: true,
        scrollPosition: window.scrollY,
      });
    } else if (window.scrollY === 0){
      this.setState({
        scrolled: false,
        scrollPosition: window.scrollY,
      })
    } else {
      console.log("failed");
    }
  }

  render () {
    const { navbarOpen, scrolled } = this.state;
    
    return (
      <React.Fragment>
          <nav className={`${(scrolled && "scrolled-down shadow-lg") || (!scrolled && "navbar")} navbar-expand-md sticky-top `}>
            <div className="navbar container-fluid d-none d-md-flex row">
                <div className="d-flex justify-content-center">
                <a className="d-md-flex navbar-brand text-white fontPrimary col-4 ms-md-5 text-center" href="/"><strong>IP</strong>Finder</a>
                </div>
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