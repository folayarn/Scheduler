import React from 'react';
import { Table} from 'react-bootstrap'
import {useSelector} from 'react-redux'
import moment from 'moment'



const GlobalView=()=>{
const data=useSelector(state=>state.globals)
const color=useSelector(state=>state.color)
  return (
<div>

<Table  striped bordered hover responsive variant="dark">
<thead>
<tr>
<td>TOTAL  </td>
  <td>NEW CASES </td>
  <td>NEW RECOVERY  </td>
  <td> NEW DEATHS</td>
  <td>TOTAL CASES </td>
  <td>TOTAL RECOVERY  </td>
  <td> TOTAL DEATHS</td>
</tr>
</thead>




<tbody>
{

    data.global.map((data)=>

<tr key={data.id}>
<td></td>
  <td style={color.newCase}>{data.NewConfirmed} </td>
  <td style={color.recover}>{data.NewRecovered}  </td>
  <td style={color.death}>{data.NewDeaths}</td>
  <td style={color.newCase}>{data.TotalConfirmed} </td>
  <td style={color.recover}>{data.TotalRecovered}  </td>
  <td style={color.death}>{data.TotalDeaths}</td>


</tr>

    )
}



</tbody>
</Table>


</div>



  )

}


export default GlobalView
