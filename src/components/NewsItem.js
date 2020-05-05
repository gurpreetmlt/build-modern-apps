import React, { Component } from 'react';

class NewsItem extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
           
        }
    }
    render()
    {

        console.log(this.props)

        return(
            <div>
              <h1>ITEM {this.props.match.params.id} </h1>
             </div>
        )
    }
}

export default NewsItem;