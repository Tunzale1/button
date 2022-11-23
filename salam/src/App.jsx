import React, { Component } from 'react'

 class App extends Component {
  event(){
    console.log('button click')
  }
 state={ 
  subscribed: false,
  text:"Click here"
 }
salam =()=>{
this.setState({subscribed:!this.state.subscribed, text:this.state.text ==="Click here" ? "Clicked": "Click here" })

}


  render() {



    return (
      
      <div className='duymeler'>
        <button className ="but"onClick={this.event}>Clickk</button>
      <button className = {this.state.subscribed ? "but2" : "but2-danger"} onClick={() =>this.salam()}>{this.state.text}</button>

     </div>
    )
  }
}


export default App
