import React,{useState} from 'react'
import Card from 'react-bootstrap/Card'

const Counter = (props) =>{

    const [count,setCount] = useState(0)

    const handleChangeIncrement = () =>{
        setCount(count+3)
    }
    const handleChangeDecrement = () =>{
        setCount(count-3)
    }
    return (
        <div>
            <h1 style={{marginLeft:'20%',marginRight:'20%' ,border:'30px solid red',textAlign:'center',backgroundColor:'purple',color:'white'}}>Counter - {count}</h1>
            <button onClick={handleChangeIncrement} style={{borderRadius:'10px',width :'100px',height:'100px',backgroundColor:'green',marginLeft:'30%',marginTop:'10%'}}>+</button>
            <button onClick={handleChangeDecrement}  style={{borderRadius:'10px',width :'100px',height:'100px',color:'white',backgroundColor:'red',marginLeft:'300px'}}>-</button>
        </div>
    )
}

export default Counter