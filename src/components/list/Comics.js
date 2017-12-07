import React from 'react';
import { connect } from 'react-redux';
import './List.scss';

import { getCharactersComics, getCharactersComicsPaged } from './../../store/character/actions';
import * as CharactersSelectors from './../../store/character/selectors';

import ComicCard from './../card/Comic';
import BaseListHOC from './BaseListHOC';

class Comics extends React.Component {
  componentDidMount(){
    this.props.getComics(this.props.idCharacter);
  }

  componentWillUpdate(nextProps){
    if(this.props.idCharacter !== nextProps.idCharacter  ){
      this.props.getComics(nextProps.idCharacter);
    } else {
      if(this.props.offset !== nextProps.offset ) {
        this.props.getComicsPaged(this.props.idCharacter, nextProps.offset);
      }
    }
  }

  render() {
   return (
     <div className="List Comics" >
       {
         this.props.comics &&
         this.props.comics.length > 0  &&
         (
           <div className="row ">
             <p className="col-12 col-md-12 header-list">Resultados da busca</p>
             {
               this.props.comics.map((item,index) =>
                 (
                   <ComicCard key={index} {...item} />
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
   comics: CharactersSelectors.getActualComics(state),
 };
}

const mapDispatchToProps = (dispatch, props) => {
 return {
   getComics: (idCharacter) => {
     dispatch(getCharactersComics(idCharacter));
   },
   getComicsPaged: (idCharacter, offset) => {
     dispatch(getCharactersComicsPaged(idCharacter, offset));
   }
 };
}

const listConnected = connect(mapStateToProps, mapDispatchToProps)(Comics);

export default BaseListHOC(listConnected);
