import React, { Component } from 'react';
import './table.css';
import Row from './Row.js';

class Table extends Component{

    sort(){

    }

    render(){
        const data = this.props.data;
        const rows = [];

        for(let row of data){
            rows.push(
                <Row
                    id={row.id}
                    first_name= {row.first_name}
                    last_name= {row.last_name}
                    email= {row.email}
                    avatar= {row.avatar}
                    company= {row.company}
                    adress= {row.adress}
                    phone= {row.phone}
                />
            );
        }

        return(
          <table>
              <thead>
                  <tr>
                      <th>id</th>
                      <th onClick={this.sort(this.props.getData)}>first_name</th>
                      <th>last_name</th>
                      <th>email</th>
                      <th>avatar</th>
                      <th>company</th>
                      <th>adress</th>
                      <th>phone</th>
                  </tr>
              </thead>
              <tbody>
              {rows}
              </tbody>
          </table>
        );
    }
}

export default Table;
