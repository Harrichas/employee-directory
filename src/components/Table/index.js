import React from "react";
import API from "../../utils/API"
import Search from "../SearchForm"


class Table extends React.Component {
    constructor() {
        super()
        this.state = {
            employees: [],
            empList: [],
            search: ""
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
        this.setState({ search: event.target.value });
        console.log(this.state.search);
      };
    
    

    //const sortByName = this.state.employees.sort()

    render() {
        const sortByName = function(){
            console.log(this.state);
            const mapped = this.state.empList.map(function(el, i) {
            return { index: i, value: el.name.first.toLowerCase() };
            })
            
            mapped.sort(function(a, b) {
                if (a.value > b.value) {
                return 1;
                }
                if (a.value < b.value) {
                return -1;
                }
                return 0;
            });
        }

        
        const rows = this.state.employees.map(function(employee){
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
        <Search/>
     <table className="table">
          <thead>
              <tr>
                  <td>
                      Picture
                  </td>
                  <td onClick={sortByName}>
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