import React, { Component } from 'react';
import { MdDonutSmall, MdSearch } from "react-icons/md";

class SearchBar extends Component{

  state = {
    search: ''
  }



  render(){
    return <div >
    <input className='d1 float-left' placeholder='Search here' onChange={(e) => this.setState({ search: e.target.value })} value={this.state.search}/>
    <MdSearch className='d2 btn'/>
    </div>
  }
}

export default SearchBar;
