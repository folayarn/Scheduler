export const getdata=(data)=>{
return{
    type:'FETCH_DATA',
    payload:data
}

}

export const getglobe=(data)=>{
    return{
        type:'FETCH_GLOBAL_DATA',
        payload:data
    }

    }

    export const filtereData=(data)=>{
        return{
            type:'FETCH_SINGLE_DATA',
            payload:data
        }

        }



      ///  data.filteredData.Country
