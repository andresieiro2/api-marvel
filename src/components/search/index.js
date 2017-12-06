import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router';

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
     <div className={`search ${this.props.ironman ? 'ironman' : '' }`} >
      <div className="container">
        {
          this.props.ironman && (
            <div className="row">
              <div className="col-12 col-md-12 ">
                <Link className="iron-man-link btn" to="comics/1009368">
                  See Iron Man Comics
                </Link>
              </div>
            </div>
          )
        }
        <div className="row">
          <div className="col-9 col-md-10 px-r-0">
            <input type="text"  className="search-input"
              value={this.state.search}
              placeholder="Type the character's name. Ex: Iron Man"
              onChange={ (e) => this.setState({search:e.target.value})}
            />
          </div>
          <div className="col-3 col-md-2 px-l-0">
            <button className="btn search-button"
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
