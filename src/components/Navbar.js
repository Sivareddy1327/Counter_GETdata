import React from 'react'
import {Link,Route} from 'react-router-dom'
import Apiget from './Apiget'
import Counter from './Counter'
import Post from './Post'
import './Navbar.css'

const Navbar = (props) =>{

    return (
        <div>
            <div style={{backgroundColor :'gray',padding:'20px'}}>
            <Link className='text' to='/counter'>Counter</Link>
            <Link className='text'  to='/apiget'>Api</Link>
            <Link className='text'  to='/post'>Post</Link>
            </div>
            <Route path='/counter' component={Counter} exact={true}/>
            <Route path='/apiget' component={Apiget} exact={true}/>
            <Route path='/post' component={Post} exact={true}/>
        </div>
    )
}

export default Navbar