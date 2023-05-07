import { useState } from "react";
import Button from "./elements/Button";

import S from '@/styles/options.module.css'
import B from '@/styles/elements/button.module.css'

const Options = ({ 
   className, 
   type, 
   options, 
   searchDrinks, 
   beingUsed, 
   setBeingUsed 
}) => {
   const [selectedOption, setSelectedOption] = useState('');
   
   const handleClick = string => {
      setSelectedOption(string)
      searchDrinks(string)
   }
        
   return ( <div className={S.container}>
      <div className={`${S.options} ${S[className]}`}>
         { options.map((ing, i) => (
            <Button 
               className={`${
                  ing[type] === selectedOption ? 
                        B['button--selected'] 
                     : ( beingUsed ? 
                           B['button--hidden'] 
                        : null 
                     )
                  }`}
               key={i} 
               value={ing[type]}
               handler={handleClick}
               onClick={ e => handleClick(e) }
            >
               {ing[type]}
            </Button>
         )) }
      </div>
      { beingUsed ? (
         <Button
            handler={() => setBeingUsed(false)}
         >Select another category</Button>
      ) : null }
   </div> )
}

export default Options