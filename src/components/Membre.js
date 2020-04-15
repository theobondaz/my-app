import React, { Fragment } from 'react'

const Membre = ({nom, age, children, cacherNom, handleChange}) => {
    return(
    <Fragment>
    <h2 style={{ 
        backgroundColor: age < 10 ? "gray" : 'lightblue',
        color:'white'}}>
             {nom} : {age}
            </h2>
            <button onClick={cacherNom}>X</button>
            <input  value={nom} onChange={handleChange} type="text"></input>
    {children ? <strong>{children}</strong> : <Fragment />}
    </Fragment>

    
    )
}

export default Membre