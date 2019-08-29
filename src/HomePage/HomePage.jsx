import React from 'react';
import Iframe from 'react-iframe'
import { userService, authenticationService } from '@/_services';
import ReactWeather from 'react-open-weather';
import 'react-open-weather/lib/css/ReactWeather.css';

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
        const { currentUser, users } = this.state;
        return (
            <div>
                <div>
                    <h1>Hi {currentUser.username}!</h1>
                    <div style={{ marginTop: '50px' }}>  
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
                        width="540px"
                        height="311px"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative"/>
                </div>
            </div>
        );
    }
}

export { HomePage };