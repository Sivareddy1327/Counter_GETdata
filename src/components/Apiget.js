import React,{useEffect, useState} from 'react'
import axios from 'axios'

const Apiget = (props) =>{

    const [data,setData] = useState([])
    const [info,setInfo] = useState('')

    useEffect(()=>{
        axios.get('https://gorest.co.in/public/v1/todos')
        .then((response)=>{
            const result = response.data.data
            setData(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])
    
    return (
        <div>
            <h1>API</h1>
                <ul>
                {data.map((ele,i)=>{
                    return <div key={i} style={{border :'1px solid green'}}>
                        <h3>{ele.title}</h3>
                        <h3>{ele.due_on}</h3>
                        <h3>{ele.status}</h3>
                        <h3>{ele.user_id}</h3>
                        </div>
                })}
                </ul>
            
        </div>
    )
}
export default Apiget