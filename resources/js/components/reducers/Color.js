const newCase={
    color:'yellow'
}
const deaths={
    color:'red'
}

const recover={
    color:'#47f03f'
}


const initial={
    recover:recover,
    death:deaths,
    newCase:newCase
    }

    const colorReducer=(state=initial, action)=>{

        if(action.type){
        return state
        }
    }

    export default colorReducer
