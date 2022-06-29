import React from 'react'

 const user = (props) => {
    const {data}=props;
  return (

    <div>
        <h1>user comp</h1>
        <h2>{data.name}</h2>


    </div>
    
  )
}

export default user;