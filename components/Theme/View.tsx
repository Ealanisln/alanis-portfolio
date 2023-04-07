import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import Image from 'next/image'

import cupcake from '../../public/cupcake.svg'

const themeValues = [
  "cupcake",
  "bumblebee",
  "Aqua"
]

const MyComponent = () => {
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for React projects
  }, [])

  

  return (
    <select className="text-primary" data-choose-theme>
        <option className='text-primary' value="">T</option>
        {themeValues.map((value) => (
          <option className='text-primary' key={value.toLowerCase()}>{value}</option>
        ))}
      </select>
  )
}

export default MyComponent
