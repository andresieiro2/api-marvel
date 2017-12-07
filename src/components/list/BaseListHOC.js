import React from 'react';
import { connect } from 'react-redux';
import './List.scss';

import CharacterCard from './../card/Character';

import * as CharacterSelectors from './../../store/character/selectors';
import * as LoadingSelectors from './../../store/loading/selectors';

const BaseListHOC = (WrappedList) => {

  class BaseList extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        offset: 0,
      }

      this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    };

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    };


    handleScroll(e) {
      if (
        (window.pageYOffset > (document.body.offsetHeight - window.outerHeight  ) ) &&
        ( this.props.metaList.count !== this.props.metaList.total) &&
        !this.props.isLoading
      ) {
        this.setState({ offset: this.state.offset + 1 } );
      }
    }

    render() {
      return (
        <div className="fullwidth">
          <WrappedList {...this.props} offset={this.state.offset}/>
          {
            this.props.metaList.count === 0
            && this.props.metaList.total === 0
            && this.props.metaList.searched && (
              <p>
                Nenhum resultado encontrado
              </p>
            )
          }
        </div>
      )
    }
  }


  const mapStateToProps = (state) => {
   return {
     metaList: CharacterSelectors.getListMeta(state),
     isLoading: LoadingSelectors.isLoading(state)
   };
  }

  const mapDispatchToProps = (dispatch, props) => {
   return {

   };
  }

  return connect(mapStateToProps, mapDispatchToProps)(BaseList);
}



export default BaseListHOC;
