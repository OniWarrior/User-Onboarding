import React from 'react'

export default function User({ details }) {
  if (!details) {
    return <h3>Working fetching your User&apos;s details...</h3>
  }

  return (
    <div className='user container'>
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      {
        details.service ? <p>Terms of service: Yes</p> : <p>Terms of service: No</p>
      }
      
    </div>     
  )
}

