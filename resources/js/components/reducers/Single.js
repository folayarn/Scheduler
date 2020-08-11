
const initial={
    filteredData:[]
    }

    const SingleReducer=(state=initial, action)=>{

        switch(action.type){

    case 'FETCH_SINGLE_DATA':
        return {
            filteredData:action.payload
        }
        break

    default:
        return state

        }
    }

    export default SingleReducer
