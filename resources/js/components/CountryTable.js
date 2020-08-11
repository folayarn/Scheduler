import React from 'react';
import { Table} from 'react-bootstrap'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'



const CountryTable=()=>{
const data=useSelector(state=>state.data)
const color=useSelector(state=>state.color)


  return (

<Table  striped bordered hover responsive variant="dark">
<thead>
<tr>
  <td>INDEX</td>
  <td> COUNTRY</td>
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

    data.data.map((data,index)=>

<tr key={data.id}>
<td>{index}</td>
  <td><Link to={data.Country}>{data.Country}</Link></td>
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

  )

}


export default CountryTable
