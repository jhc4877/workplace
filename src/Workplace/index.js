import React from 'react';
import ReactWeather from 'react-open-weather';
// import ReactWeather2 from './WeatherService/ReactWeather'
import 'react-open-weather/lib/css/ReactWeather.css';

class Workplace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  render() {
    return (
      <div>
        <div style={{ marginTop: '50px' }}>  
            <ReactWeather
                forecast="5days"
                apikey="10bc6d391be8422b803232333192005"
                type="city"
                city="seoul"
                lang="ko"
            />
        </div><br />
        {/* <div>  
            <ReactWeather2
                forecast="todays"
                apikey="10bc6d391be8422b803232333192005"
                type="city"
                city="Bundang"
                lang="ko"
            />
        </div> */}
      </div>
    )
  }
}

export default Workplace;