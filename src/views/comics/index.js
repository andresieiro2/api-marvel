import React from 'react';
import ComicsList from './../../components/list/Comics';

export default class ComicsView extends React.Component {

  render() {
    return (
      <div className="ComicsView">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12">
              <ComicsList idCharacter={this.props.params.idCharacter} />
            </div>
          </div>
        </div>
      </div>
    );
  }

}
