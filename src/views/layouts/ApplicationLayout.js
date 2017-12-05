import React from 'react';
import Header from './../../components/header';
import Search from './../../components/search';
import LoaderGlobal from './../../components/loaders/global';

export default class ApplicationLayout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Search />
        {this.props.children}
        <LoaderGlobal />
      </div>
    )
  }
}
