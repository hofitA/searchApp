import React, {Component} from 'react';

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

    handleClick = (e, item) => {
        this.props.clicked ({
            id: item.id,
            name: item.full_name,
            url: item.html_url
        });
        e.target.disabled = true;
    }

    render() {
        if (this.state.isLoadding){            
            return(<h1> Loadding... </h1>);
        }
        else{
            return (
                <div>
                    {this.state.data.map((arrItem)=>{
                        return (
                            <div>
                                <h2> <a href= {arrItem.html_url}>{arrItem.full_name} </a> </h2>
                                {arrItem.description}
                                {()=>{this.props.onClickMore(arrItem.id);}}
                                <button onClick= {(e) => this.handleClick(e, arrItem)}>Bookmark</button>
                            </div> 
                        )
                    })}                          
                </div>
            );
        }
    }
        

}

export default Gallery