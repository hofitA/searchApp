import React, {Component} from 'react';
import './App.css';
import Search from './components/Search';
import Gallery from './components/Gallery';

class App extends Component {
    constructor (props) {
      super (props);
      this.state = {
        repositoryName: "",
        bookmarks: []
      }
    }

    searchHandler = (repository) => {
      this.setState ({
        repositoryName: repository})
    }  

    bookmarkHandler = (item) => {
      this.setState ({
        bookmarks: [...this.state.bookmarks, item]
      })
    }

    render() {
      return (
        <div ClassName="App">
          <Search clicked= {this.searchHandler} ></Search> 
          {this.state.repositoryName ? <Gallery 
                repository= {this.state.repositoryName} 
                clicked=  {this.bookmarkHandler}>
                </Gallery> : null }
        </div>
      )
    }
}
export default App;
 