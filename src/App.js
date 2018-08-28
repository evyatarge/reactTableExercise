import React, { Component } from 'react';
import './App.css';
import Table from './table/Table';
import About from './about/About';


const URL = 'http://localhost:3000/employees?_sort=id&_order=asc';

const ABOUT = "about";
const TABLE = "table";

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            tableData: ''
        };
    }

    componentDidMount(){
        this.getData();
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
                this.setState({tableData: data});
                }
            );
    }

    moveToPage(page){
        let aboutDisplay = document.getElementById(ABOUT) ? document.getElementById(ABOUT).style.display : undefined;
        let tableDisplay = document.getElementById(TABLE) ? document.getElementById(TABLE).style.display : undefined;
        if(page === ABOUT){
            if(aboutDisplay === "none"){
                aboutDisplay.s = "block";
                tableDisplay = "none"
            }
        }
        else if(page === TABLE){
            tableDisplay = "block";
            aboutDisplay = "none";
        }
    }

  render() {

      return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Employees Table</h1>
            <div className="App-nav">
                <span className="App-nav-button" onClick={this.moveToPage(ABOUT)}>About</span>
                <span className="App-nav-button">Table</span>
            </div>
        </header>
        <p className="App-intro">
        </p>

          <div id={TABLE}>
            {this.state.tableData.length > 0 ? <Table data={this.state.tableData}/> : null }
          </div>

          <div id={ABOUT}>
              {<About/>}
          </div>


      </div>
    );
  }
}

export default App;


