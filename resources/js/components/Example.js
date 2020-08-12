import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider,useDispatch} from 'react-redux'
import {getdata,getglobe} from './actions'
import {Container,Row,Col,Button} from 'react-bootstrap'
import allReducers from '../components/reducers/JointReducers'
import axios from 'axios'
import CountryTable from './CountryTable'
import GlobalView from './GlobalView'
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import Loading from './Loading';
import SingleCountryViewed from './SingleCountryViewed'

const store= createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

 function Example() {
    const [done,setDone]=useState(false)
     const [done2,setDone2]=useState(false)
const dispatch =useDispatch()
useEffect(() => {
    axios.get('api/country', {
       headers: {
           'Content-Type':'application/json' }
   }).then(res=>{
    dispatch(getdata(res.data))
    setDone2(true)
   }).catch(err=>{
            console.log(err)  
   })
    
    
   axios.get('api/global', {
    headers: {
        'Content-Type':'application/json' }
}).then(res=>{
 dispatch(getglobe(res.data))
 setDone(true)
}).catch(err=>{
      console.log(err)
})
}, [])



if(!done && !done2){
    return (<Loading/>)
}else{
    return (
        <div>

        <Container>

<Col style={{marginTop:'50px',marginBottom:'30px'}}>
<h1 className="text-center">Latest Corona-virus Cases across the Globe</h1>
</Col>
       <Col> <Row>
        <Col md={1} sm={1} xs={1}><Link to="/">
         <Button size="lg" variant="dark">Go Back</Button></Link></Col>
        <Col md={10} sm={12} xs={12}>
<GlobalView />
        </Col>
<Col md={1} sm={0} xs={0}></Col>
</Row>
<Row>
<Col md={12} sm={12} xs={12}>
<Switch>
<Route exact path='/'>

<CountryTable/>
</Route>

<Route exact path='/:filtered'>
<SingleCountryViewed/>
</Route>
</Switch>

</Col>
</Row>
</Col>
</Container>
            </div>
    )
}
 }
export default Example


    ReactDOM.render(
<Provider store={store}>
<Router>    <Example /></Router>
    </Provider>
    ,document.getElementById('example'));
