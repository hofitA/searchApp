import React, {Component} from 'react';

import GalleryItem from './GalleryItem';

class Gallery extends Component {
    constructor (props){
        super (props);
        this.state = {
            isLoadding: true,
            data: []
          };
        fetch('https://api.github.com/search/repositories?q=' + props.repository)
            .then(response => response.json())
            .then(json => this.setState({
                isLoadding: false,
                data: json.items
            }));  
    }
    
    /* 
        handleaddBookmarkClick funcion 
        send to App component the selected reposetory 
    */
    handleBookmarkClick = (e, item) => {
        this.props.clicked ({
            id: item.id,
            full_name: item.full_name,
            html_url: item.html_url
        });
        e.target.disabled = true;
    }

    render() {
        if (this.state.isLoadding){            
            return(<h1> Loadding... </h1>);
        }
        else{
            return (
                <div className="gallery">
                    {this.state.data.map((arrItem, index)=>{
                        return (
                            <GalleryItem
                                key={index} 
                                arrItem={arrItem} 
                                handleClick={this.handleBookmarkClick} />                            
                        )
                    })}                          
                </div>
            );
        }
    }
        

}

export default Gallery