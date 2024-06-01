import React from 'react';
import useState from 'react';
import { json, checkStatus } from '../utils';
import SearchableMap from '../map';
import './home.css';



class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ipSearched: '',
      ipDetails: [],
      lat: '22.5726',
      lon: '88.3832',
      error: '',
      isSubmitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ isSubmitted: false });
  }

  handleChange(event) {
    this.setState({ ipSearched: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault(); 
    let { ipSearched } = this.state;
    ipSearched = ipSearched.trim();

    if (!ipSearched) {
      return;
    }
    
    fetch(`https://ipapi.co/${ipSearched}/json/`)
      .then(checkStatus)
      .then(json)
      .then((data) => {
        console.log(Object.entries(data));
        
          this.setState({ 
            ipDetails: data,
            lat: data.latitude,
            lon: data.longitude,
            error: '',
            isSubmitted: true,
          });
      })
      .catch((error) => {
        this.setState({ error: error.message });
        
        console.log(error);
      })   
    }

  render() {
      // Set up initial state variables 
      const { ipSearched, ipDetails, lat, lon, isSubmitted, error } = this.state;

    return (
      <div className='container homePage'>
        {/* Heading */}
        <div className='headingWrapper d-flex mx-auto'>
          <h1 className="container heading fontPrimary display-1 text-center my-auto">IP FINDER</h1>
        </div>

        {/* Search bar */}
        <form className='searchColumn d-flex justify-content-center' onSubmit={this.handleSubmit}>
          <input className='input fontPrimary me-2' placeholder='Search IPv4 address' onChange={this.handleChange} value={ipSearched}></input>
          <button type='submit' className='submitButton fontPrimary'>Find</button>
        </form>

        {/* Call searched results */}
        {isSubmitted && !error ?
            <div className='container row d-flex justify-content-around mx-auto'>
            <div className='column mapColumn col-12 col-md-5'>
              <SearchableMap lat={lat} lon={lon} />
            </div>
            
            <div className='column inputColumn col-12 col-md-5 py-3 mt-5 mt-md-0'>
              <h4 className='fontPrimary'>What is the IPv4 address?</h4>
              <h3 id='ip' className='fontPrimary'>{ipDetails.ip}</h3>
              <h4 className='fontPrimary'>Approximate location: </h4>
      
              <h3 className='fontPrimary'>{ipDetails.city}, {ipDetails.region}, {ipDetails.country_name}.</h3>
      
              <h4 className='fontPrimary'>Internet Service Provider (ISP): </h4>
              <h3 className='fontPrimary'>{ipDetails.org}</h3>
            </div>
          </div>
          :
          null
        }
      </div>
    )
  }
}


export default Home;
