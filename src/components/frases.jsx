import React from 'react'
import { connect } from 'react-redux'
import NewFrase from './add_frases'

function  Frases (props)
{
        return <div>
                {console.log(props)}
                {props.frases.frases.map((f,i) => <div key={i} {...f}>{f.text}</div>)}
                <NewFrase/>        
        </div>
    
}

function mapStateToProps(state)
{
    return{
        frases:state.frases
    }
}

const connection = connect(
    mapStateToProps,
)

export default connection(Frases)// esto vuelve a llamar de nuevo a la function
