import React, { ReactNode } from 'react'


interface objects{
children: ReactNode;
}



const Alert = ({children}: objects) => {
  return (
    <div>{children}</div>
  )
}

export default Alert