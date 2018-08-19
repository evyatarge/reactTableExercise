import React, { Component } from 'react';
import './table.css';
import Row from './Row.js';

class Table extends Component{

    constructor(props){
        super(props);
        this.state = {
            rows: [],
            hover: false
        }
    }

    componentDidMount(){
        const data = this.props.data;
        const rows = this.state.rows;

        for(let row of data){
            rows.push(
                <Row
                    key={row.id}
                    id={row.id}
                    firstName= {row.first_name}
                    lastName= {row.last_name}
                    email= {row.email}
                    avatar= {row.avatar}
                    company= {row.company}
                    adress= {row.adress}
                    phone= {row.phone}
                />
            );
        }
        this.setState({rows:rows});
    }

    sort(){
        this.setState({rows:(this.state.rows.reverse())});
    }

    getPointerStyle() {
        var pointerStyle;
        if (this.state.hover) {
            pointerStyle = {cursor: 'pointer'}
        } else {
            pointerStyle = {cursor: 'default'}
        }
        return pointerStyle;
    }

    render(){

        return(

          <table>
              <thead>
                  <tr>
                      <th onClick={()=>this.sort()}>ID</th>
                      <th>First name</th>
                      <th>Last name</th>
                      <th>Email</th>
                      <th>Avatar</th>
                      <th>Company</th>
                      <th>Adress</th>
                      <th>Phone</th>
                  </tr>
              </thead>
              <tbody>
              {this.state.rows}
              </tbody>
          </table>
        );
    }

}

export default Table;
