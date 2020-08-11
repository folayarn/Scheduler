import React ,{useEffect,useState}  from 'react'
import {useParams} from 'react-router'
import {useSelector,useDispatch} from 'react-redux'
import {filtereData} from './actions'
import { Table,Col,Row,Spinner} from 'react-bootstrap'
import moment from 'moment'


const SingleCountryViewed=()=>{
    const data=useSelector(state=>state.single)
    const color=useSelector(state=>state.color)

    const [done,setDone]=useState(false)
    const dispatch =useDispatch()
    const {filtered}=useParams()
    useEffect(() => {
        axios.get('api/country/'+filtered , {
           headers: {
               'Content-Type':'application/json' }
       }).then(res=>{
        dispatch(filtereData(res.data))
        setDone(true)
       }).catch(err=>{
           console.log(err)
       })

    }, [])


    if(!done){
        return (<div>
        <Col  style={{marginTop:'100px'}}>
<Row>
<Col></Col>
<Col>
            <Spinner animation="grow" size="lg" role="status">
</Spinner><br/>
<b style={{marginLeft:"-20px"}}>Please Wait...</b>
</Col>
<Col></Col>
</Row>
</Col>
     </div>
            )
    }else{

    return(
<div>
<Table  striped bordered hover responsive variant="dark">
<tbody>
<tr>
<td>COUNTRY</td>
<td>{data.filteredData.Country}</td>
</tr>
<tr>
  <td>COUNTRY CODE</td>
  <td>{data.filteredData.CountryCode}</td>
  </tr>
  <tr>
  <td>NEW CASES</td>
  <td style={color.newCase}>{data.filteredData.NewConfirmed}</td>
  </tr>
  <tr>
  <td>NEW RECOVERY</td>
  <td style={color.recover}>{data.filteredData.NewRecovered}</td>
  </tr>
  <tr>
  <td> NEW DEATHS</td>
  <td style={color.death}>{data.filteredData.NewDeaths}</td>
</tr>
<tr>
 <td>TOTAL CASES </td>
<td style={color.newCase}>{data.filteredData.TotalConfirmed}</td>
</tr>
 <tr>
 <td>TOTAL RECOVERY</td>
 <td style={color.recover}>{data.filteredData.TotalRecovered}</td>
 </tr>
 <tr>
 <td> TOTAL DEATHS</td>
 <td style={color.death}>{data.filteredData.TotalDeaths}</td>
 </tr>
 <tr>
  <td>DATE</td>
 <td>{moment(data.filteredData.Date).format()}</td>
 </tr>
</tbody>
</Table>




</div>



    )
    }


}
export default SingleCountryViewed
