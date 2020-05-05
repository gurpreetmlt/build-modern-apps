import React, { Component } from 'react';

const NewsListItem = (props) =>
{

    console.log(props);

        return(
            <div>
            <div key={props.item.id}>
                <h3>{props.item.title} </h3>
                  <p> {props.item.feed} </p>
                 </div>
            </div>
          
        )

    
}

export default NewsListItem;


