import React,{useEffect, useState} from 'react'
import axios  from 'axios'

const Post = (props) =>{

    const [data,setData] = useState('')
    useEffect(()=>{
        axios.post('https://admin.srkprojects.com/web/api/client/v1/contact-us/', {
            name : 'sivareddy',
            email:'sivareddy@gmail.com',
            message : 'post data'
        })
        .then((response)=>{
            const result = response.data
            console.log(result)
            setData(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])
    
    return (
        <div style={{borderRadius:'5px',border:'3px solid green',width:'50%',marginTop:'5%',marginLeft:'10%',textAlign:'center'}}>
            <h1>Post Method</h1>
            <h3> Name : {data.name}</h3>
            <h3>Email : {data.email}</h3>
            <p>Message : {data.message}</p>
            
        </div>
    )
}
export default Post