import React from 'react';
import { connect } from 'react-redux';
import './List.scss';

import CharacterCard from './../card/Character';
import Paginator from './../paginator';

import * as CharacterSelectors from './../../store/character/selectors';


const BaseListHOC = (WrappedList) => {

  class BaseList extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        offset: 0,
      }
    }

    render() {
      return (
        <div className="fullwidth">
          <WrappedList {...this.props} offset={this.state.offset}/>
          { this.props.metaList.count === 0
            && this.props.metaList.total === 0
            && this.props.metaList.searched && (
              <p>
                Nenhum resultado encontrado
              </p>
            )
          }
          {
            this.props.metaList.count !== this.props.metaList.total && (
              <Paginator count={this.props.metaList.count} total={ this.props.metaList.total }
              onNext={  () => { this.setState({ offset: this.state.offset + 1 } ) }   }
              />
            )
          }
        </div>
      )
    }
  }


  const mapStateToProps = (state) => {
   return {
     metaList: CharacterSelectors.getListMeta(state),
   };
  }

  const mapDispatchToProps = (dispatch, props) => {
   return {

   };
  }

  return connect(mapStateToProps, mapDispatchToProps)(BaseList);
}



export default BaseListHOC;
