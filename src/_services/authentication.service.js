import { BehaviorSubject } from 'rxjs';

// import config from 'config';
import { handleResponse } from '@/_helpers';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch(`https://34.67.187.63/auth/users/signin?username=${username}&password=${password}`, requestOptions)
        .then(handleResponse)
        .then(requestTest)

        .then(user => {
            console.log(user.data, '1111112121212121212121212121212');
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user.data));
            currentUserSubject.next(user.data);

            return user;
        }).catch((err) => {
            alert("없는 계정으로 로그인 하셨네요")
        });
}

function requestTest(response) {
    const requestTest = {
        method: 'GET',
        headers: { Authorization: `Bearer ${response}`,
        'Accept': 'application/json',
        }
    };

    const axios = require('axios');

    return axios({
        url: 'https://34.67.187.63/auth/users/me',
        method: 'get',
        headers: { Authorization: `Bearer ${response}`,
        'Accept': 'application/json',
        }
      });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}
