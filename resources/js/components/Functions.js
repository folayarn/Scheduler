import axios from 'axios'


export const fetchCountry=()=>{
    return axios
    .get('/api/country',{
        headers:{'Content-Type':'application/json'}

    }).then(res=>{

        return res.data
    }).catch(err=>{
        console.log(err)

    })
}


export const fetchGlobal=()=>{
    return axios
    .get('/api/global',{
        headers:{'Content-Type':'application/json'}

    }).then(res=>{

        return res.data
    }).catch(err=>{
        console.log(err)

    })
}
