import React from 'react'
import S from '@/styles/elements/inputText.module.css'

const InputText = ({ id, placeholder, value, changeHandler, resetHandler }) => {

   const handleReset = e => {
      e.preventDefault()
      resetHandler()
   }

   return (
      <form className={ S.form }>
         <input 
            id={ id }
            className={ S.input } 
            placeholder={ placeholder }
            type="text"
            value={value}
            onChange={ changeHandler }
         />
         
         <button 
            className={S.reset} 
            onClick={e => handleReset(e)}
         >
            <svg 
               xmlns="http://www.w3.org/2000/svg" 
               className={`${S['h-6']} ${S['w-6']}`}
               fill="none" 
               viewBox="0 0 24 24" 
               stroke="currentColor" 
               strokeWidth="2"
            >
               <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M6 18L18 6M6 6l12 12"
               />
            </svg>
         </button>
      </form>
   )
}

export default InputText