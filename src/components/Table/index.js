import React from "react";
import axios from "axios";

class Table extends React.Component {
    constructor() {
        super()
        this.state = {
            employees: []
        }
    }
    componentDidMount(){
        axios.get('https://randomuser.me/api/?results=25').then((res) => {
            console.log(res.data.results);
            this.setState({
                employees: res.data.results
            })
        })
    }
    render() {
        const rows = this.state.employees.map(function(employee){
            return (
                <tr>
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
     return( <table className="table">
          <thead>
              <tr>
                  <td>
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
    )}
  }


export default Table;