import React from "react";
import API from "../../utils/API"
import Search from "../SearchForm"


class Table extends React.Component {
    constructor() {
        super()
        this.state = {
            employees: [],
            empList: [],
            search: "",
            sort: true, // true means ASC order, false means DESC order
        }
    }
    componentDidMount(){
        API.getEmployees().then((res) => {

            this.setState({
                employees: res.data.results,
                empList: res.data.results
            })
        })
    }

    handleInputChange = event => {
        this.setState({ ...this.state, search: event.target.value });
        console.log(event.target.value);
      };

    toggleSort = () => {
        this.setState({...this.state, sort: !this.state.sort})
    }

    sortByName = (a, b) => {
        // console.log(this.state);
        // const mapped = this.state.empList.map(function(el, i) {
        // return { index: i, value: el.name.first.toLowerCase() };
        // })
        
        if(this.state.sort) {
            if (a.name.first > b.name.first) {
                return 1;
            }
            if (a.name.first < b.name.first) {
                return -1;
            }
        } else {
            if (a.name.first > b.name.first) {
                return -1;
            }
            if (a.name.first < b.name.first) {
                return 1;
            }
        }
            
        return 0;
        // });
    }

    searchByFirstName = employee => {
       return employee.name.first.toLowerCase().includes(this.state.search.toLowerCase());
    }
    
    render() {
        const rows = this.state.employees.sort(this.sortByName).filter(this.searchByFirstName).map(function(employee){
            return (
                <tr key = {employee.email}>
                    <td>
                        <img src = {employee.picture.medium} alt="employee"></img>
                    </td>
                    <td>
                        {employee.name.first}
                    </td>
                    <td>
                        {employee.name.last}
                    </td>
                    <td>
                        {employee.email}
                    </td>
                </tr>
            )
        })

     return( 
    <div>
        <Search handleInputChange={this.handleInputChange}/>
     <table className="table">
          <thead>
              <tr>
                  <td>
                      Picture
                  </td>
                  <td onClick={this.toggleSort}>
                    First Name
                  </td>
                  <td>
                      Last Name
                  </td>
                  <td>
                      Email
                  </td>
              </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
      </table>
    </div>
    )}
}


export default Table;