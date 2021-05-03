  
import React from "react";
import reactDom from "react-dom";

import Node from "./Node";


class Wrapper extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count:1 ,
      start:'',
      end:'',
    //  grey: true
      
    }
  }

  handleId = (e) => {
  //  this.setState({grey: !this.state.grey})
    this.setState((prevState)=>{
      return {
       count: this.state.count+1
       
      }
    })
    console.log(e.target.id + " button clicked" + this.state.count);
    if(this.state.count===1){
      this.setState((prevState)=>{
        return {
         start:e.target.id.toString()
        
         
        }
      })
     
      
    }
    if(this.state.count===2){
      document.getElementById(this.state.start).style.background="green"
    
      this.setState((prevState)=>{
        return {
         end:e.target.id.toString()
         
        }
      })
    
     
      
    }
    if(this.state.count===3){
      document.getElementById(this.state.end).style.background="red"

    }
   
    console.log("start" + this.state.start)
    console.log("end" + this.state.end)
    
  }
  

  render() {
   // let btn_class = this.state.grey ? "buttonkey" : "buttonkey2";
    
    let gridelement = [];
    for (let i = 0; i < 16; i++) {
      for(let j = 0; j < 16; j++){
        gridelement.push(<button className="buttonkey"  key={i.toString()+ '-' + j.toString()} id={i.toString()+ '-' + j.toString()} onClick={this.handleId}/>);
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