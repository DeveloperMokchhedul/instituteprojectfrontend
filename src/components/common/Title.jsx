import React from 'react'
import cn from "../../utils/cn"

function Title({children, className}) {
  return (
    <div className={cn(`font-onest font-bold text-[32px] text-center leading-[40px] text-titleColor`,className)}>
        <h1>{children}</h1>
      
    </div>
  )
}

export default Title
