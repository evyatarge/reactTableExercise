import React, { Component } from 'react';
import './row.css';

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
            width:150,
            height:150
        }
    }

    render(){

        return(
            <tr>
                <td style={{fontWeight: "bold", width:"50px"}}>{this.props.id}</td>
                <td>{this.props.firstName}</td>
                <td>{this.props.lastName}</td>
                <td>{this.props.email}</td>
                <td style={this.getAvatarBackround()}>

                </td>
                <td>{this.props.company}</td>
                <td>{this.props.adress}</td>
                <td>{this.props.phone}</td>
            </tr>
        );
    }

}

export default Row;