import React, { Component } from 'react';


//COMPONETS
import JSON from '../src/components/db.json'
import NewsLis from './components/newslist';
import CHeader from './components/CHeaderwithStyle';

class News extends Component
{
    constructor(props)
    {
         super(props);
         this.state =
        {
          DB:JSON,
          filterd:JSON
        }
    }

    FliterNews(keywords)
    {


        let filterd = this.state.DB.filter((item)=>
        {
            return item.title.indexOf(keywords) > -1;
        })

        this.setState({filterd:filterd})
    }
   
    render()
    {
        return(
            <div>
                <CHeader Newsinputsearch={keywords=>this.FliterNews(keywords)} />
                <NewsLis News={this.state.filterd} />
            </div>
        )
    }
}

export default News;


