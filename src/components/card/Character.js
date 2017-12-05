import React from 'react';
import './Character.scss';

const Character = ({...props}) => {
  // console.log(props);
  return (
 <div className="Character col-12 col-md-3" >
   <div className="content">
     <p className="name">{props.name}</p>
     <img className="image" src={`${props.thumbnail.path}.${props.thumbnail.extension}`} />

      <button className="details-btn" onClick={ () => this.props.onClick(props.id)}>
        <i className="fa fa-eye" />
        Detalhes
      </button>

      <button className="comics-btn" disabled={ props.comics.available === 0 }>
        <i className="fa fa-book" />
        Comics: {props.comics.available}
      </button>
   </div>
 </div>
)};

export default Character;
