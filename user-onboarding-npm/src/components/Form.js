import React from 'react'


export default function Form(props){
   const{
       values,
       submit,
       change,
       disabled,
       errors
   } = props;

   const onSubmit = evt => {
       evt.preventDefault()
       submit()
   }

   const onChange = evt => {
    
    const { name, value, type, checked } = evt.target
    if(type ==='checkbox')
    {        
        change(name,checked)
    }
    else
    {       
        change(name, value)
    }
    
  }
    
  return (
    <form className='form container' onSubmit={onSubmit}>
       <div className='form-group submit'>
        <h2>Add a User</h2>

       
        <button disabled={disabled}>submit</button>

        <div className='errors'>
        
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>        
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

       
        <label>name&nbsp;
          <input
            value={values.name}
            onChange={onChange}
            name='name'
            type='text'
          />
        </label>

        <label>Email
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='text'
          />
        </label>

        <label>password
            <input
              value={values.password}
              onChange={onChange}
              name='password'
              type='text'
            />
        </label>  
    </div>     
        

       
      <div className='form-group checkboxes'>
        <h4>Terms of service</h4>

      
        <label>Terms of service
          <input 
            type='checkbox'
            name='service'
            onChange={onChange}
            checked={values.service}
          />
        </label>    
      </div>
    </form>
  )
}