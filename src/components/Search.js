import React, { Component } from 'react';

class Search extends Component {
    constructor(props){
        super(props);
        this.textInput = null;

        this.setTextInputRef = element => {
            this.textInput = element;
        };
        
    }  

    handleClick = () => {
        this.props.clicked(this.textInput.value);
    }

    render(){
        return(
            <div className="search">               
                <div className="search__text-box">                
                    <h1 className="heading-priamary">                        
                        <span className="heading-priamary--main">Welcom to your reposotry favorit page</span>
                        <span className="heading-priamary--sub">Type the desirable topic...</span>
                    </h1>
                    <input className="search-field"
                        type = "text" 
                        name = "repository" 
                        ref = {this.setTextInputRef} />
                    <button onClick= {this.handleClick} className="btn btn--grey btn--animated">Search</button>
                </div>
            </div>    
        )
    }

}

export default Search;