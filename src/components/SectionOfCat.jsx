import React from 'react'

export default function SectionOfCat({img,title}) {
  return (
    <>
  
     <div className='text-center'>
        <img src={img} className='w-75'/>
        <h3>{title}</h3>
     </div>
    </>
  )
}
