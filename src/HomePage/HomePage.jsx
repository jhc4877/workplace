import React from 'react';

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
        );
    }
}

export { HomePage };