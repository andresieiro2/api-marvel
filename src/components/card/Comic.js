import React from 'react';

import './Card.scss';

const Comic = ({...props}) => {
  return (
    <div className="Card comic col-12 col-md-3" >
      <div className="content">
        <p className="name" alt={props.title}>{props.title}</p>

        <img className="image" src={`${props.thumbnail.path}.${props.thumbnail.extension}`} />
        <div className="characters-list">
          <p className="subtitle">Characters: </p>
            {
              props.characters.items.map( (character, index) =>
                <span href={character.resourceURI} target="_blank" key={index}>
                  {character.name}
                </span >
              )
            }
        </div>


        <p className="description">
          {props.description}
        </p>

      </div>
    </div>
  )
};

export default Comic;
