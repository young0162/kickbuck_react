import React from 'react';
import Collapsible from 'react-collapsible';

export default class Xa extends React.Component{
    render(){
        return(
            <div>
                <Collapsible trigger="first">
                    <p>1111111111111</p>
                </Collapsible>
                <Collapsible trigger="second">
                    <p>22222222222222</p>
                </Collapsible>
                <Collapsible trigger="3">
                    <p>3333333</p>
                </Collapsible>
                <Collapsible trigger="4">
                    <p>44444444444</p>
                </Collapsible>
            </div>
        );
    }
}
// var Xa = React.createClass({
 
//     render: function() {
//       return(
   
//         <Collapsible trigger="Start here">
//           <p>This is the collapsible content. It can be any element or React component you like.</p>
//           <p>It can even be another Collapsible component. Check out the next section!</p>
//         </Collapsible>
   
//       );
//     }
   
//   });
   
//   export default Xa;
