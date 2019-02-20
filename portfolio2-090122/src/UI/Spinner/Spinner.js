
import React from 'react';



const spinner = (props) => (
<div>
    
    <div className="gooey" style={ {
          
          height: props.anim.animate ? props.anim.stopHeight : props.anim.startHeight,
          width: props.anim.animate ? props.anim.stopWidth : props.anim.startWidth,
          
          transition: 'all 2s',
        } } onClick={props.clicked}> </div>
        <p style={ {
          
            height: props.anim.animate ? props.anim.stopHeight : props.anim.startHeight,
          width: props.anim.animate ? props.anim.stopWidth : props.anim.startWidth,
          
          transition: 'all 2s',
        } }>
            Portfolio 
          </p>
</div>
);

export default spinner;