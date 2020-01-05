import React from "react";

const Input = ({name, label, value, onChange}) => {
 return(
     <div className="form-group">
         <label htmlFor={name}>{label}</label>
         <input
             value={value}
             onChange={onChange}
             type="text"
             className="form-control"
             id={name}
             name={name}
             aria-describedby="emailHelp"
             placeholder="Enter email"/>
         {name === "userName" && <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
         }
     </div>
 )
};

export default Input;