import React, {Component} from 'react';
import request from 'superagent'

class Treatments extends Component{


  constructor(){
  super();

    this.state = {
    treatments: []
    };
  }

  componentDidMount() {
  request.get('https://radiant-sea-68380.herokuapp.com/api/v1/treatments')
    .then((response) => {
    this.setState({
    treatments: response.body.data
    })
  })
  }
  render(){
  return(
    <div>
      <table>
        <tr>
          <th> User Id </th>
          <th> Description </th>
          <th> Treatments </th>
        </tr>
      {this.state.treatments.map(treatment => {
            return (
          <tr>
            <th> {treatment.user} </th>
            <th> {treatment.description} </th>
            <th> {treatment.listOfTreatments} </th>
          </tr>
            )
          })
      }
    </table>
    </div>
    );
    }
  }

export default Treatments
