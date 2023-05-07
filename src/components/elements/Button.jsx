import React from 'react'
import S from '@/styles/elements/button.module.css'

const Button = ({ children, handler, value, className }) => {
   return (
      <button
         onClick={() => handler(value)}
         className={className}
      >
         <div className={`${S['c-button']} ${S['c-button--gooey']}`}>{children}
            <div className={S['c-button__blobs']}>
               <div></div>
               <div></div>
               <div></div>
            </div>
         </div>
         <svg 
            xmlns="http://www.w3.org/2000/svg" 
            version="1.1" 
            style={{ display: 'block', height: 0, width: 0}}
         >
            <defs>
               <filter id="goo">
                  <feGaussianBlur 
                     in="SourceGraphic" 
                     stdDeviation="10" 
                     result="blur" 
                  />
                  <feColorMatrix 
                     in="blur" 
                     mode="matrix" 
                     values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" 
                     result="goo"
                  />
                  <feBlend 
                     in="SourceGraphic" 
                     in2="goo"
                  />
               </filter>
            </defs>
         </svg>
      </button>
   )
}

export default Button