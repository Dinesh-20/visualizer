import React from 'react'

import CustomButton from './CustomButton'


const AIPicker = ({prompt, setPrompt, generatingImg, handleSubmit}) => {
  return (
    <div className='aipicker-container'>

      <p>Sorry currently unavaiable.........</p>
      {/* <textarea className='aipicker-textarea' placeholder=''
      rows={5}
      value={prompt}
      onChange={(e) => setPrompt(e.target.value) }/> */}

      <div className='flex flex-wrap gap-3'>
        {/* {generatingImg ? (
        <CustomButton 
          type='ouline'
          title='Let the AI Cook...'
          customStyles='text-xs'
        />)
        : (<>
          <CustomButton
            type='outline'
            title='AI Logo'
            handleClick={() => handleSubmit('logo')}
            customStyles='text-xs'
          />
          <CustomButton
            type='filled'
            title='AI Full'
            handleClick={() => handleSubmit('full')}
            customStyles='text-xs'
          />
          </>)} */}
        
      </div>
   </div>
  )
}

export default AIPicker
