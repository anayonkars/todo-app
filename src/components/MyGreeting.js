import React, {Component} from 'react';

function MyGreeting() {
    const firstName = "Anayonkar";
    const lastName = "Shivalkar";
    return <h1>Hello, {firstName + " " + lastName}</h1>
}

export default MyGreeting;