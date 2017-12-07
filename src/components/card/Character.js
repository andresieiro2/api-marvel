import React from 'react';
import { Link } from 'react-router';

import './Card.scss';

const Character = ({...props}) => (
  <div className="Card col-12 col-md-3" >
    <div className="content">
      <p className="name">{props.name}</p>
      <img className="image" src={`${props.thumbnail.path}.${props.thumbnail.extension}`} />

      <Link to={`comics/${props.id}`} className={`btn comics-btn ${ props.comics.available === 0 ? 'disabled' : ''}` } >
        <i className="fa fa-book" />
        Comics: {props.comics.available}
      </Link>
    </div>
  </div>
)

export default Character;
