import React, { Component } from 'react';

class About extends Component{

    render(){

        return(

            <div>
                About My-App
                <p>
                    this is my-app to present table data from mock DB using <a href={'https://github.com/typicode/json-server'}>json-server</a>
                </p>
                <p>Move to the main page to view the data</p>
            </div>
        );
    }
}

export default About;