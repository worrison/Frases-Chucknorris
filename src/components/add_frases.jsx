import React from 'react'
import Frase from '../actions/frases';

function newFrase(){
      return(
          <div>
              {/* ejecutamos la accion del action */}
             <button onClick={Frase}>NUEVA FRASE</button>

          </div>
      )

}
export default newFrase;