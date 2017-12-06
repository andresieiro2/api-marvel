import React from 'react';
import { connect } from 'react-redux';
import './Characters.scss';

import CharacterCard from './../card/Character';

import * as CharacterSelectors from './../../store/character/selectors';

class Characters extends React.Component {
 render() {
   return (
     <div className="Characters" >
      {
        this.props.listCharacters &&
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
 return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
