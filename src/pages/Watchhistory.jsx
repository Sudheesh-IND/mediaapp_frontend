import React from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function Watchhistory() {
  return (
    <div className='container' style={{minHeight:'100vh',maxHeight:'100%'}}>
      <MDBTable style={{marginTop:'150px'}}>
      <MDBTableHead dark>
        <tr>
          <th scope='col'>Id</th>
          <th scope='col'>Caption</th>
          <th scope='col'>Url</th>
          <th scope='col'>Time</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='row'>1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
    </div>
  )
}

export default Watchhistory