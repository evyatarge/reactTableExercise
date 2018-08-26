import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Table from './table/Table';
import About from './about/About';
import {SAVE_DATA, saveData} from "./redux/actions";



const URL = 'http://localhost:3000/employees?_sort=id&_order=asc';

class App extends Component {

    // constructor(props){
    //     super(props);
    //     // this.state = {
    //     //     data: ''
    //     // };
    // }

    componentDidMount(){
        this.getData();
        // this.props.dispatch(saveData(data));
        // this.props.dispatch({
        //
        //     type:SAVE_DATA
        // });

        // this.getData();
    }

    getData(){
        fetch(URL)
            .then(response => {
                if(response.ok){
                    return response.json();
                }
                else{
                    throw new Error('Error fetching data');
                }
            })
            .then(data =>{
                this.props.dispatch(saveData(data));
                }
            );
    }

    mapStateToProps = state => {
        return {
            data: state.data //this.getData()
        }
    }

  render() {
    return (
      <div className="App">


          <Table/>
          {/*{this.state.data.length > 0 ? <Table data={this.state.data}/> : null }*/}

      </div>
    );
  }
}


export default connect()(App);

// <header className="App-header">
//           <h1 className="App-title">Welcome to Employees App</h1>
//         </header>
//         <p className="App-intro">
//         </p>
