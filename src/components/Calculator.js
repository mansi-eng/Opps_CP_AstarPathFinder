import React from "react";

import Button from "./Button";

class Calculator extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       expression: ""
//     };

//     this.onKeyPressed = this.onKeyPressed.bind(this);
//     this.onEvaluatePressed = this.onEvaluatePressed.bind(this);
//     this.onDeletePressed = this.onDeletePressed.bind(this);
//   }

//   onKeyPressed(text) {
//     this.setState(prev => ({
//       expression: prev.expression + text
//     }));
//   }

//   onEvaluatePressed() {
//     const result = eval(this.state.expression);
//     result && this.setState({ expression: result.toString() });
//   }



  render() {
  

    return (
      <div className="container">
        {/* <DisplayWindow expression={this.state.expression} /> */}
        <div className="key-container">


        <Button id="00"  onKeyPressed={this.onKeyPressed} />
        <Button id="01"  onKeyPressed={this.onKeyPressed} />
        <Button id="02"  onKeyPressed={this.onKeyPressed} />
        <Button id="03"  onKeyPressed={this.onKeyPressed} />
        <Button id="04"  onKeyPressed={this.onKeyPressed} />
        <Button id="05"  onKeyPressed={this.onKeyPressed} />
        <Button id="06"  onKeyPressed={this.onKeyPressed} />
        <Button id="07"  onKeyPressed={this.onKeyPressed} />
        <Button id="08"  onKeyPressed={this.onKeyPressed} />
        <Button id="09"  onKeyPressed={this.onKeyPressed} />
        <Button id="010"  onKeyPressed={this.onKeyPressed} />
        <Button id="011"  onKeyPressed={this.onKeyPressed} />
        <Button id="012"  onKeyPressed={this.onKeyPressed} />
        <Button id="013"  onKeyPressed={this.onKeyPressed} />
        <Button id="014"  onKeyPressed={this.onKeyPressed} />
        <Button id="015"  onKeyPressed={this.onKeyPressed} />
     

        <Button id="10"  onKeyPressed={this.onKeyPressed} />
        <Button id="11"  onKeyPressed={this.onKeyPressed} />
        <Button id="12"  onKeyPressed={this.onKeyPressed} />
        <Button id="13"  onKeyPressed={this.onKeyPressed} />
        <Button id="14"  onKeyPressed={this.onKeyPressed} />
        <Button id="15" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="16" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="17" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="18" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="19" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="110"  onKeyPressed={this.onKeyPressed} />
        <Button id="111"  onKeyPressed={this.onKeyPressed} />
        <Button id="112"  onKeyPressed={this.onKeyPressed} />
        <Button id="113"  onKeyPressed={this.onKeyPressed} />
        <Button id="114"  onKeyPressed={this.onKeyPressed} />
        <Button id="115"  onKeyPressed={this.onKeyPressed} />
     

        <Button id="20" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="21" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="22" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="23" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="24" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="25" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="26" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="27" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="28" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="29" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="210"  onKeyPressed={this.onKeyPressed} />
        <Button id="211"  onKeyPressed={this.onKeyPressed} />
        <Button id="212"  onKeyPressed={this.onKeyPressed} />
        <Button id="213"  onKeyPressed={this.onKeyPressed} />
        <Button id="214"  onKeyPressed={this.onKeyPressed}/>
        <Button id="215"  onKeyPressed={this.onKeyPressed} />
     

        <Button id="30" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="31" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="32" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="33" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="34" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="35" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="36" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="37" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="38" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="39" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="310"  onKeyPressed={this.onKeyPressed} />
        <Button id="311"  onKeyPressed={this.onKeyPressed} />
        <Button id="312"  onKeyPressed={this.onKeyPressed} />
        <Button id="313"  onKeyPressed={this.onKeyPressed} />
        <Button id="314"  onKeyPressed={this.onKeyPressed} />
        <Button id="315"  onKeyPressed={this.onKeyPressed} />
     

        <Button id="40" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="41" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="42" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="43" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="44" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="45" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="46" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="47" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="48" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="49" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="410"  onKeyPressed={this.onKeyPressed} />
        <Button id="411"  onKeyPressed={this.onKeyPressed} />
        <Button id="412"  onKeyPressed={this.onKeyPressed} />
        <Button id="413"  onKeyPressed={this.onKeyPressed} />
        <Button id="414"  onKeyPressed={this.onKeyPressed} />
        <Button id="415"  onKeyPressed={this.onKeyPressed} />
     

        <Button id="50" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="51" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="52" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="53" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="54" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="55" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="56" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="57" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="58" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="59" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="510"  onKeyPressed={this.onKeyPressed} />
        <Button id="511"  onKeyPressed={this.onKeyPressed} />
        <Button id="512"  onKeyPressed={this.onKeyPressed} />
        <Button id="513"  onKeyPressed={this.onKeyPressed} />
        <Button id="514"  onKeyPressed={this.onKeyPressed} />
        <Button id="515"  onKeyPressed={this.onKeyPressed} />
     

        <Button id="60" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="61" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="62" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="63" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="64" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="65" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="66" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="67" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="68" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="69" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="610"  onKeyPressed={this.onKeyPressed} />
        <Button id="611"  onKeyPressed={this.onKeyPressed} />
        <Button id="612"  onKeyPressed={this.onKeyPressed} />
        <Button id="613"  onKeyPressed={this.onKeyPressed} />
        <Button id="614"  onKeyPressed={this.onKeyPressed} />
        <Button id="615"  onKeyPressed={this.onKeyPressed} />
     

        <Button id="70" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="71" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="72" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="73" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="74" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="75" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="76" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="77" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="78" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="79" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="710"  onKeyPressed={this.onKeyPressed} />
        <Button id="711"  onKeyPressed={this.onKeyPressed} />
        <Button id="712"  onKeyPressed={this.onKeyPressed} />
        <Button id="713"  onKeyPressed={this.onKeyPressed} />
        <Button id="714"  onKeyPressed={this.onKeyPressed} />
        <Button id="715"  onKeyPressed={this.onKeyPressed} />
     

        <Button id="80" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="81" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="82" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="83" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="84" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="85" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="86" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="87" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="88" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="89" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="810"  onKeyPressed={this.onKeyPressed} />
        <Button id="811"  onKeyPressed={this.onKeyPressed} />
        <Button id="812"  onKeyPressed={this.onKeyPressed} />
        <Button id="813"  onKeyPressed={this.onKeyPressed} />
        <Button id="814"  onKeyPressed={this.onKeyPressed}/>
        <Button id="815"  onKeyPressed={this.onKeyPressed} />
     

        <Button id="90" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="91" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="92" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="93" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="94" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="95" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="96" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="97" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="98" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="99" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="910"  onKeyPressed={this.onKeyPressed} />
        <Button id="911"  onKeyPressed={this.onKeyPressed} />
        <Button id="912"  onKeyPressed={this.onKeyPressed} />
        <Button id="913"  onKeyPressed={this.onKeyPressed} />
        <Button id="914"  onKeyPressed={this.onKeyPressed} />
        <Button id="915"  onKeyPressed={this.onKeyPressed} />
     

        <Button id="100" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="101" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="102" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="103" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="104" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="105" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="106" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="107" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="108" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="109" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="1010"  onKeyPressed={this.onKeyPressed} />
        <Button id="1011"  onKeyPressed={this.onKeyPressed} />
        <Button id="1012"  onKeyPressed={this.onKeyPressed} />
        <Button id="1013"  onKeyPressed={this.onKeyPressed} />
        <Button id="1014"  onKeyPressed={this.onKeyPressed} />
        <Button id="1015"  onKeyPressed={this.onKeyPressed} />

        <Button id="110" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="111" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="112" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="113" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="114" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="115" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="116" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="117" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="118" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="119" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="1110"  onKeyPressed={this.onKeyPressed} />
        <Button id="1111"  onKeyPressed={this.onKeyPressed} />
        <Button id="1112"  onKeyPressed={this.onKeyPressed} />
        <Button id="1113"  onKeyPressed={this.onKeyPressed} />
        <Button id="1114"  onKeyPressed={this.onKeyPressed} />
        <Button id="1115"  onKeyPressed={this.onKeyPressed} />

        <Button id="120" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="121" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="122" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="123" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="124" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="125" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="126" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="127" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="128" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="129" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="1210"  onKeyPressed={this.onKeyPressed} />
        <Button id="1211"  onKeyPressed={this.onKeyPressed} />
        <Button id="1212"  onKeyPressed={this.onKeyPressed} />
        <Button id="1213"  onKeyPressed={this.onKeyPressed} />
        <Button id="1214"  onKeyPressed={this.onKeyPressed} />
        <Button id="1215"  onKeyPressed={this.onKeyPressed} />

        <Button id="130" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="131" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="132" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="133" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="134" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="135" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="136" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="137" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="138" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="139" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="1310"  onKeyPressed={this.onKeyPressed} />
        <Button id="1311"  onKeyPressed={this.onKeyPressed} />
        <Button id="1312"  onKeyPressed={this.onKeyPressed} />
        <Button id="1313"  onKeyPressed={this.onKeyPressed} />
        <Button id="1314"  onKeyPressed={this.onKeyPressed} />
        <Button id="1315"  onKeyPressed={this.onKeyPressed} />

        <Button id="140" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="141" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="142" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="143" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="144" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="145" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="146" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="147" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="148" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="149" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="1410"  onKeyPressed={this.onKeyPressed} />
        <Button id="1411"  onKeyPressed={this.onKeyPressed} />
        <Button id="1412"  onKeyPressed={this.onKeyPressed} />
        <Button id="1413"  onKeyPressed={this.onKeyPressed} />
        <Button id="1414"  onKeyPressed={this.onKeyPressed} />
        <Button id="1415"  onKeyPressed={this.onKeyPressed} />

        
        <Button id="150" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="151" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="152" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="153" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="154" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="155" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="156" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="157" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="158" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="159" text="" onKeyPressed={this.onKeyPressed} />
        <Button id="1510"  onKeyPressed={this.onKeyPressed} />
        <Button id="1511"  onKeyPressed={this.onKeyPressed} />
        <Button id="1512"  onKeyPressed={this.onKeyPressed} />
        <Button id="1513"  onKeyPressed={this.onKeyPressed} />
        <Button id="1514"  onKeyPressed={this.onKeyPressed}/>
        <Button id="1515"  onKeyPressed={this.onKeyPressed} />
        <button onClick={this.onEvaluatePressed} className="key-path">Find Path</button>
        </div>
      </div>
    );
  }
}

export default Calculator;