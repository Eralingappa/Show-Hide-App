// Write your code here
import {Component} from 'react'

import './index.css'
C
class showHide extends Component{
    state={
        showFirstName:false,
        showLastName:false
    }
    onShowLastName =()=>{
        this.setState(prevState=>({showLastName:!prevState.LastName}))
    }
    onShowFirstName =()=>{
        this.setState(prevState=>({showFirstName:!  [prevState.LastName]}))
    }
    render(){
    const {showFirstName,showLastName} =this.state
    return(
        <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
        <div className="name-container">
        <button type="button" className="show-hide-button" onClick={this.onShowFirstName}>
        SHow/Hide FirstName 
        </button>
        {showFirstName && <p className='name'>Joe</p>}
        </div> 
        <div className='name-container'>
        <button type='button' className='show-hide-container' onClick={this.showLastName}>
        
        
       SHow/Hide LastName
        {showLastName && <p className='name'>Jonas</p>}
        </button>
        </div>
        </div>
        </div>
    )
    }
}
export default showHide
//ccbp submit RJSCP8DO88
