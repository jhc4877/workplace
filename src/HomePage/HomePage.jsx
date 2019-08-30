import React from 'react';
import Iframe from 'react-iframe'
import { userService, authenticationService } from '@/_services';
import ReactWeather from 'react-open-weather';
import 'react-open-weather/lib/css/ReactWeather.css';
import './HomePage.css';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            users: null
        };
    }

   

    // componentDidMount() {
    //     userService.getAll().then(users => this.setState({ users }));
    // }

    render() {
        const style = {
            borderWidth : "0px"
        };
        const { currentUser, users } = this.state;
        return (
            <div>
                <div>
                    <h1>안녕하세요. {currentUser.username} 님</h1>
                    <div style={{ marginTop: '20px' }}>  
                        <ReactWeather
                            forecast="5days"
                            apikey="10bc6d391be8422b803232333192005"
                            type="city"
                            city={currentUser.city}
                            lang="ko"
                        />
                </div><br />
                </div>
                <div>
                <Iframe url="https://34.67.187.63"
                        width="100%"
                        height="300px"
                        id="myId"
                        display="initial"
                        position="relative"
                        className="IframeCss" />
                </div>
            </div>
        );
    }
}

export { HomePage };