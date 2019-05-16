import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor(){
    super()
    this.state = {
      text:''
    };
    // this.searchPosts = this.searchPosts.bind(this)
  }

  searchText(text){
    this.setState({text});
  }
  searchPosts(){
    let {text} = this.state;
    let {searchPostsFn} = this.props;

    searchPostsFn(text);
    this.setState({text:''})
    console.log(text)
  }
  render() {
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input placeholder="Search Your Feed"
          onChange={(e)=> this.searchText(e.target.value)} />

          <SearchIcon id="Search__icon" />
        </div>
        
      </section>
    )
  }
}