import React from 'react';


const GalleryItem = ({arrItem, handleClick}) => {
    return(
        <div className = "item">
            <div className="item__heading"> <a href= {arrItem.html_url}>{arrItem.full_name} </a> </div>
            <button className="btn--yellow" onClick= {(e) => handleClick(e, arrItem)}> 
                &#9734; Bookmark
            </button>
            <p className="item__details">{arrItem.description} </p>
        </div> 
    );
}

export default GalleryItem;