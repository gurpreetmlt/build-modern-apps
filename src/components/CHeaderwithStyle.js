import React, { Component } from 'react';

class CHeader extends Component
{

    constructor(props){
        super(props);
            this.state = 
            {
               
                keywords:''
            }

    }

    NewsSearch(event) {
        this.setState({
            keywords:event.target.value
        })
        
        this.props.Newsinputsearch(event.target.value)
        
    }

    

    render()
    {
        const styles = {
            Header:{
            background:'#000'
            },
            logo:
            {
                color:'#fff',
                textAlign:'center'
            }
        }

        return(
            <div>
                <header style={styles.Header}>
                <h2 style={styles.logo}>Funcatinal Header Componets <br />
                    With CSS
                </h2>

                <center><input style={styles.input} onChange={this.NewsSearch.bind(this)} /></center>


                </header>
             </div>
        )
    }
}

export default CHeader;