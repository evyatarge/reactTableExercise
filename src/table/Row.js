import React, { Component } from 'react';
import './row.css';

class Row extends Component{

    constructor(props){
        super();
        this.state = {
            avatar: null
        };
    }

    getAvatar(avatarUrl){
        return fetch(avatarUrl)
            .then(result=> {
                if (result.ok) {
                    return result
                }
            });
    }

    componentDidMount(){
        this.state.avatar = this.getAvatar(this.props.avatar);
    }

    render(){

        const url = this.state.avatar;
        var styles = {
            backgroundImage: `url: (${url})`,
            width:150,
            height:150
        }


        return(
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.first_name}</td>
                <td>{this.props.last_name}</td>
                <td>{this.props.email}</td>
                <td style={styles}>

                </td>
                <td>{this.props.company}</td>
                <td>{this.props.adress}</td>
                <td>{this.props.phone}</td>
            </tr>
        );
    }
}

export default Row;