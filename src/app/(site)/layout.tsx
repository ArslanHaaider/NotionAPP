
import React from 'react'

const HomePageLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <html lang='en'>
       <body>
       {children}
       </body>
    </html>
  )
}

export default HomePageLayout