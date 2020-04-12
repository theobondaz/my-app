import React, { Fragment } from 'react'

const Membre = ({nom, age, children}) => {
    return(
    <Fragment>
    <h2> {nom} : {age}</h2>
    
    
    </Fragment>

    
    )
}

export default Membre