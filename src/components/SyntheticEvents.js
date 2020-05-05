import React, { Component } from 'react';

class SyntheticEvents extends Component
{
    IputChage(event)
    {
        console.log(event.target.value)
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
            },

            input:
            {
                margin:'0 auto'
            }
        }
        return(
            <div>
                <header style={styles.Header}>
                <h2 style={styles.logo} onClick={()=>console.log('Cliked')}>Synthetic Events-subtitle-en</h2>
                <center><input style={styles.input} onChange={this.IputChage} /> </center>
                </header>
             </div>
        )
    }
}

export default SyntheticEvents;