import { Component } from "react";

class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Gatilhos</th>
            <th scope="col">Canal</th>
            <th scope="col">Timer</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr> 
          <td>pix</td>
          <td>sms</td>
          <td>12:00</td>
          <td><button type="button" class="btn btn-info">ver mensagem</button></td>
          </tr>
        </tbody>
      </table>
     );
  }
}
 
export default Registro;