import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import EmployeeTable from "./components/Table"
import SearchBar from "./components/SearchBar"
import EmployeeList from "./employees.json"
import Table from 'react-bootstrap/Table'


class App extends Component{

  state = {
    employees: EmployeeList,
    filteredEmployees: [],
    search: ""
  }

 filterEmployees = (e) => {
   event.preventDefault()
  this.setState({
    ...this.state,
    search: e.target.value
 })

 

//  if (search === employee.name) {
// filteredEmployees = this.state.employees.filter(employee => employee.name === search)
// this.setState(filteredEmployees)
//  }
let filteredEmployees =  this.state.employees
const superFilteredEmployees = filteredEmployees.filter(employee =>  
  employee.firstName === this.state.search || 
  employee.lastName === this.state.search 
  )

this.setState({
  filteredEmployees: superFilteredEmployees})

}
  
   // if employees name doesnt start with this letters or letters dont include



 
  
  render() {
    
    return (
      <div className="App">
        <Header />
        <SearchBar searchProp={this.state.search} filterFunctionProp = {this.filterEmployees} />
        <EmployeeTable filterEmployees = {this.state.filteredEmployees}/>

      </div>
    );
  }
}


export default App;
