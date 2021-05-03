  
import React from "react";

import Node from "./Node";

class Wrapper extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count:1 ,
      start:'',
      end:''
    }
  }
  // handleClick(){
  //   this.setState((prevState)=>{
  //     return {
  //      count: prevState.count+1
  //     }
  //   })
  // }
  handleId = (e) => {
    this.setState((prevState)=>{
      return {
       count: prevState.count+1
       
      }
    })
    console.log(e.target.id + " button clicked" + this.state.count);
    if(this.state.count===1){
      this.setState((prevState)=>{
        return {
         start:e.target.id
         
        }
      })
     
      
    }
    if(this.state.count===2){
      this.setState((prevState)=>{
        return {
         end:e.target.id
         
        }
      })
     
      
    }
    console.log("start" + this.state.start)
    console.log("end" + this.state.end)
  }
  

  render() {
    
    let gridelement = [];
    for (let i = 0; i < 16; i++) {
      for(let j = 0; j < 16; j++){
        gridelement.push(<Node key={i.toString()+ '-' + j.toString()} id={i.toString()+ '-' + j.toString()} onClick={this.handleId}/>);
      }
    }

    return (
      <div className="container">
         <div className="key-container">
          {gridelement}
        <button onClick={this.handleId} className="key-path">Find Path</button>
        </div>
      </div>
    );
  }
}

export default Wrapper;