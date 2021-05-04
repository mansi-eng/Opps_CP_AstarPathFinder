import React from "react";
import Node from "./Node";

class Wrapper extends React.Component {

  constructor() {
    super();
    this.state = {nodeCounter: 0,  startNode: "", stopNode: "", node_type: "key"};
  }

  handleId = (e) => {
    if(this.state.nodeCounter < 2) {
      if(this.state.nodeCounter === 0) {
        this.setState({startNode: e.target.id, 
          node_type:"key-start" });
      } else {
        this.setState({stopNode: e.target.id, 
          node_type: "key-stop",
          currentNode: this.state.startNode,
          open: [this.state.startNode],
        });
        
      } 
      this.setState({nodeCounter: this.state.nodeCounter+1});
    }
    console.log(e.target.id + " button clicked " + this.state.startNode + " -- " + this.state.stopNode + "  |" + " count: " + this.state.nodeCounter);
  }



  render() {
    
    let gridelement = [];
    for (let i = 0; i < 14; i++) {
      for(let j = 0; j < 16; j++){
        gridelement.push(<Node key={i.toString()+ '-' + j.toString()} id={i.toString()+ '-' + j.toString()} nodeType = {((i.toString()+ '-' + j.toString()) === this.state.startNode) ? "key-start" : ((i.toString()+ '-' + j.toString()) === this.state.stopNode) ? "key-stop" : "key" } onClick={this.handleId} />);
      }
    }

    return (
      <div className="container">
         <div className="key-container">
          {gridelement}
        <button id="find_path" onClick={this.handleId}   className="key-path ">Find Path</button>
        </div>
      </div>
    );
  }
}

export default Wrapper;