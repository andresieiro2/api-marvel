import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import './index.scss';

import { getCharactersByName } from './../../store/character/actions';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: "",
    }
  }

 render() {
   return (
     <div className="search" >
      <div className="container">
        <div className="row">
          <div className="col-9 col-md-10 px-0">
            <input type="text"  className="search-input"
              value={this.state.search}
              placeholder="Digite o nome do personagem. Ex: Iron Man"
              onChange={ (e) => this.setState({search:e.target.value})}
            />
          </div>
          <div className="col-3 col-md-2 px-0">
            <button className="search-button"
              disabled={this.state.search.length === 0}
              onClick={() => {this.props.searchCharacters(this.state.search)}}
            >
             <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
     </div>
   );
 }
};

const mapStateToProps = (state) => {
 return { };
}

const mapDispatchToProps = dispatch => {
 return {
   searchCharacters: (name) => {
    dispatch(push('/'))
    dispatch(getCharactersByName(name));
   }
 };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
