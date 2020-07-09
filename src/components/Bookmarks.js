import React, {Component} from 'react';

class Bookmarks extends Component {
    constructor (props){
        super (props);        
    }

    render() {  
        if (this.props.list.length >0){ 
            return (
                <div className= "bookmarks">
                    {this.props.list.map((arrItem, index)=>{
                        return (
                            <div className= "bookmarks__url"> <a href= {arrItem.html_url}>{arrItem.full_name} </a> </div>                         
                        )
                    })}                          
                </div>
            );
        }
        else { //there are no bookmarks 
            return (
                <div className= "bookmarks"> You haven't bookmark repository yet... </div>
            )
        }

    }
}

export default Bookmarks