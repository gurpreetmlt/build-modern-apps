import React, { Component } from 'react';
import NewsListItem from './NewsListItme';

const NewsList = (props) =>
{


    const item =  props.News.map((item) =>{

        return(
           <div>
               <NewsListItem key={item.id} item={item} />
           </div>
        )

    })

    return(
        <div>
            {item}
        </div>
    )
}

export default NewsList;


