import React from "react";

import Node from "./Node";

class Wrapper extends React.Component {

  handleId = (e) => {
    console.log(e.target.id + " button clicked");
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