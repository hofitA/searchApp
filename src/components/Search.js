import React, { Component } from 'react';

// const Search = (props) => {
//     return(
//         <div>                
//             <input 
//                 type = "text" 
//                 name = "repository" 
//                 placeholder= "repository"
//                 ref = "repository"  />
//             <button onClick= {props.clicked(this.refs.repository)}></button>
//         </div>
//     )
// }

class Search extends Component {
    constructor(props){
        super(props);
        
    }  

    handleClick = () => {
        this.props.clicked(this.refs.repository.value);
    }

    render(){
        return(
            <div>                
                <input 
                    type = "text" 
                    name = "repository" 
                    ref = "repository"  />
                <button onClick= {this.handleClick}></button>
            </div>
        )
    }

}

export default Search;