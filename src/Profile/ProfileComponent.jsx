import React from 'react'
import PropTypes from "prop-types";

function ProfileComponent({data,children,handleName}) {
 
  return (
    <div>
      <button onClick={()=>handleName(data.fullName)} style={{"height":30, "width":100}}>  get Name </button>
      <h1 style={{ color :"red"}}> Hello I'm {data.fullName}</h1>
      <h1 style={{ color :"green"}}> I have a {data.bio}</h1>
      <h1 style={{ color :"blue"}}> I'm a {data.profession}</h1>
     
      {children}
      
     
    </div>
  )
}
ProfileComponent.defaultProps = {
  data : {
    fullName:"No data",
    bio:"No data",
    profession:"No data"
  }
}
ProfileComponent.propTypes = {
 handleName : PropTypes.func

}



export default ProfileComponent