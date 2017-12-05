import React from 'react';
import CharactersList from './../../components/list/Characters';

export default class HomeView extends React.Component {

  render() {
    return (
      <div className="HomeView">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <CharactersList />
            </div>
          </div>
        </div>    
      </div>
    );
  }

}
