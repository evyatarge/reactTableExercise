import React, { Component } from 'react';

class Row extends Component{

    constructor(props){
        super(props);
        this.state = {
            avatar: props.avatar
        };
    }

    getAvatarBackround() {
        return {
            backgroundImage: `url(${this.state.avatar})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
        }
    }

    render(){

        return(
            <tr>
                <td style={{fontWeight: "bold"}}>{this.props.id}</td>
                <td>{this.props.firstName}</td>
                <td>{this.props.lastName}</td>
                <td>{this.props.email}</td>
                <td style={this.getAvatarBackround()}/>
                <td>{this.props.company}</td>
                <td>{this.props.adress}</td>
                <td>{this.props.phone}</td>
            </tr>
        );
    }

}

export default Row;