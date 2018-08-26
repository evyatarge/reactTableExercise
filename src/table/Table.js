import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './table.css';
import Row from './Row.js';
import {saveData} from "../redux/actions";

class Table extends Component{

    constructor(props){
        super(props);
        // this.state = {
        //     rows: [],
        // }
    }

    componentDidMount(){
        const rows = [];
        const data = this.props.data? this.props.data : [];

        for(let row of data){
            rows.push(
                <Row
                    key= {row.id}
                    id= {row.id}
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
        this.props.dispatch(saveData(rows));
        // this.setState({rows:rows});
    }

    sort(){
        const newRows = this.props.rows.reverse();
        this.props.dispatch(saveData(newRows));
        // this.setState({rows:(this.props.rows.reverse())});
    }

    mapStateToProps = state => {
        return {
            rows: state.data//this.getData()
        }
    }

    render(){

        return(

          <table>
              <thead>
                  <tr>
                      <th><span onClick={()=>this.sort()} className="sort"></span>ID</th>
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
              {this.props.rows}
              </tbody>
          </table>
        );
    }

}

// Table.propTypes = {
//     rows: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             firstName: PropTypes.string.isRequired,
//             lastName: PropTypes.string.isRequired,
//             email: PropTypes.string.isRequired,
//             avatar: PropTypes.string.isRequired,
//             company: PropTypes.string.isRequired,
//             adress: PropTypes.string.isRequired,
//             phone: PropTypes.string.isRequired
//         }).isRequired
//     ).isRequired,
// }

export default connect()(Table);
