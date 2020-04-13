import React, { Fragment } from 'react'

const Membre = ({nom, age, children}) => {
    return(
    <Fragment>
    <h2 style={{ 
        backgroundColor: age < 10 ? "gray" : 'lightblue',
        color:'white'}}>
             {nom} : {age}
            </h2>
    
    
    </Fragment>

    
    )
}

export default Membre