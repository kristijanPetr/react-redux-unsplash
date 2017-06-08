import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import ListImages from '../containers/list_images';
import ActiveImage from '../containers/active_image';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <ListImages/>
          <ActiveImage />
      </div>
    );
  }
}
