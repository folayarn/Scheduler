
const initial={
    global:[]
    }






    const GlobalReducer=(state=initial, action)=>{

        switch(action.type){
    case 'FETCH_GLOBAL_DATA':
    return{
     global:action.payload
    }
    default:
        return state

        }


    }

    export default GlobalReducer
