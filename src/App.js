import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data';

class App extends React.Component {
  state = {
    searchTerm: '',
    count: 0
  }

  changeState = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  linearSearch = (array, value) => {
    console.log('linear function activated');
    for (let i=0; i<array.length; i++){
      if(array[i] === parseInt(value)) {
        this.setState({count: i + 1});
        return;
      }
    }
    console.log('found nothing');
    return -1;
  };

  binarySearch = (array, value, start=0, end=array.length-1, origCount=0) => {
    console.log('function activated');
    if (start > end) return -1;
    array.sort();
    let index = Math.floor((start + end)/2);
    let item = array[index];
    let count = origCount;

    if (item === parseInt(value)) {
      console.log('we found it!');
      console.log(count);
        this.setState({count: count});
        return;
    }
    else if (item < parseInt(value)) {
      console.log('running another search');
      count++;
        return this.binarySearch(array, value, index+1, end, count);
    }
    else if (item > parseInt(value)) {
      console.log('running another search');
      count++;
        return this.binarySearch(array, value, start, index-1, count);
    }
}

render () {
  return (
    <section>
    <div className="App">
      <input id="searchTerm" onChange={this.changeState}></input>
      <button onClick={() => this.linearSearch(data, this.state.searchTerm)}>Linear Search</button>
      <button onClick={() => this.binarySearch(data, this.state.searchTerm)}>Binary Search</button>

      <p>Program ran {this.state.count} searches to find the number</p>
    </div>
    </section>
  );
  }
}


export default App;
