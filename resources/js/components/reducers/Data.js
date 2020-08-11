
const initial={
data:[]
}

const DataReducer=(state=initial, action)=>{

    switch(action.type){
case 'FETCH_DATA':
return{
 data:action.payload
}
break
default:
    return state
    }
}

export default DataReducer
