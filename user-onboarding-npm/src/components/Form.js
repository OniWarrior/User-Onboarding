import React from 'react'


export default function Form(props){
   const{
       values,
       submit,
       change,
       disabled,
       errors,
   } = props;

   const onSubmit = evt => {
       evt.preventDefault()
       submit()
   }

   const onChange = evt =>{
       const {name,value,type,checked} =evt.target
       const valueToUse = type === 'checkbox' ? checked : value
       change(name, valueToUse)
   }
    
   return (
       <form className='form-container' onClick={onSubmit}>
           <div className='form-group submit'>
               <h2>Add a User</h2>

               <button disabled={disabled}>Submit</button>

               <div className='errors'>
                   <div>{errors.name}</div>
                   <div>{errors.email}</div>
                   <div>{errors.password}</div>
                   <div>{errors.termsOfservice}</div>
               </div>

               <div className='form-group inputs'>
                   <h4>General information</h4>
                   <label>Name&nbsp;
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
                 <div className='form-group checkboxes'>
                     <label>Terms Of Service
                      <input 
                        type='checkbox'
                        name='terms of service'
                        onChange={onChange}
                        checked={values.termsOfservice}
                      />
                     </label>
                  </div>                  
               </div>
           </div>

       </form>
   )


}