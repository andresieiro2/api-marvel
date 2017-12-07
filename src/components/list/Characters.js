import React from 'react';
import { connect } from 'react-redux';
import './List.scss';

import BaseListHOC from './BaseListHOC'
import CharacterCard from './../card/Character';

import * as CharacterSelectors from './../../store/character/selectors';

import { getCharactersByNamePaged } from './../../store/character/actions';

class Characters extends React.Component {

  componentWillUpdate(nextProps){
    if(this.props.offset !== nextProps.offset ) {
      this.props.getCharactersPaged(nextProps.offset);
    }
  }

 render() {
   return (
     <div className="List Characters" >
      {
        this.props.listCharacters &&
        this.props.listCharacters.length > 0  &&
        (
          <div className="row ">
            <p className="col-12 col-md-12 header-list">Resultados da busca</p>
            {
              this.props.listCharacters.map((item,index) =>
                (
                  <CharacterCard key={index} {...item} />
                )
              )
            }
          </div>

        )
      }
     </div>
   );
 }
};

const mapStateToProps = (state) => {
 return {
   listCharacters: CharacterSelectors.getCharactersList(state)
 };
}

const mapDispatchToProps = dispatch => {
 return {
   getCharactersPaged: (offset) => {
     dispatch(getCharactersByNamePaged(offset));
   }
 };
}

const listConnected = connect(mapStateToProps, mapDispatchToProps)(Characters);

export default BaseListHOC(listConnected);
