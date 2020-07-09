import React, {Component} from 'react';
import './App.css';
import Search from './components/Search';
import Gallery from './components/Gallery';
import Bookmarks from './components/Bookmarks';

class App extends Component {
    constructor (props) {
      super (props);
      
      // check if we have saved bookmark on storage 
      let savedBookmarks = sessionStorage.getItem('bookmarks') ? JSON.parse(sessionStorage.getItem('bookmarks')) : [];

      this.state = {
        repositoryName: "",
        bookmarks: savedBookmarks,
        showBookmarks: false
      }
    }

    searchHandler = (repository) => {
      this.setState ({
        repositoryName: repository,
        showBookmarks: false
      })
    } 

    /*
        bookmarkHandler function 
        get the new repository that selected as bookmark, check if the id not exicte on the bookmark before befor adding to storage 
    */
    bookmarkHandler = (item) => {        
        if (sessionStorage.getItem('bookmarks')){
            let storage = JSON.parse(sessionStorage.getItem('bookmarks'));
            let idArr = storage.map( el => el.id );
            console.log (idArr.indexOf(item.id));
            if (idArr.indexOf(item.id) < 0 ){ 
              this.setState ({
                bookmarks: [...this.state.bookmarks, item]
              },() => {
                sessionStorage.setItem('bookmarks', JSON.stringify(this.state.bookmarks));
              })
            }
        } else {
          console.log("storage:"+ sessionStorage.getItem('bookmarks'))
          this.setState ({
            bookmarks: [item]
          }, () => {
            sessionStorage.setItem('bookmarks', JSON.stringify(this.state.bookmarks))
          })
        }
    }

    render() {
      return (
        <div className="App">
          <Search clicked= {this.searchHandler} ></Search> 
          <button className="btn btn--blue btn--animated" onClick= {()=>{
              this.setState({
                repositoryName: "",
                showBookmarks: this.state.showBookmarks ? false : true
              })
            }}>Checkout your Bookmarks</button>
          {this.state.repositoryName ? <Gallery 
                repository= {this.state.repositoryName} 
                clicked=  {this.bookmarkHandler}>
                </Gallery> : null }     
          {this.state.showBookmarks ? <Bookmarks
                list = {this.state.bookmarks}
          ></Bookmarks> : null}
        </div>
      )
    }
}
export default App;
 