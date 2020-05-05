import React, { Component } from 'react';

class States extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            input:'',
            Title:'Aman is working on Login'
        }
    }

    IputChage(event)
    {
        this.setState
        (
            {

    input:event.target.value

            }
            
        )
        console.log('input status', this.state.input);
    }

    render()
    {
        const styles = {
            Header:{
            background:'#000',
            padding: '26px'
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
                <h2 style={styles.logo} onClick={()=>console.log('Cliked')}>Set Status on Input</h2>
                <center><input style={styles.input} onChange={this.IputChage.bind(this)} /> </center>
                <div style={styles.logo}> {this.state.Title} </div>
                <div style={styles.logo}> {this.state.input} </div>
                </header>
             </div>
        )
    }
}

export default States;