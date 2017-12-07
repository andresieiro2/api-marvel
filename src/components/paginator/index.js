import React from 'react';
import './index.scss';

const paginator = ({...props}) => (
 <div className="paginator" >
   <p className="counter">{props.count} / { props.total } Itens </p>
   <button onClick={ props.onNext } className="btn" >
     Load More
   </button>
 </div>
);

export default paginator;
