import React from 'react';
import { Link } from 'react-router';

import './Character.scss';

const Character = ({...props}) => {
  // console.log(props);
  return (
 <div className="Character col-12 col-md-3" >
   <div className="content">
     <p className="name">{props.name}</p>
     <img className="image" src={`${props.thumbnail.path}.${props.thumbnail.extension}`} />

      <Link to={`character/${props.id}`} className="btn details-btn" onClick={ () => this.props.onClick(props.id)}>
        <i className="fa fa-eye" />
        Detalhes
      </Link>

      <Link to={`comics/${props.id}`} className="btn comics-btn" disabled={ props.comics.available === 0 }>
        <i className="fa fa-book" />
        Comics: {props.comics.available}
      </Link>
   </div>
 </div>
)};

export default Character;
