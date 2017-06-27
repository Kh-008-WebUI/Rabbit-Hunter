import React from 'react';
import Hunter from './Hunter';

export const Hunters = (props) => (
  	<div className="Hunters">
		{props.hunter.map( (item,i) => {
		    return <Hunter key={i}
		            	   name={item.name} 
		               	   gender={item.gender}
		               	   accuracy={item.accuracy}
		               	   fire={props.fire} 
		               	   x={props.x} 
		               	   y={props.y}
		               	   isDead={props.isDead}/>
		    })
	    }
	</div>
);