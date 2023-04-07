import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import cupcake from '../../public/cupcake.svg'

const themeValues = [
  "dark",
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
        {themeValues.map((value) => (
          <option className='text-primary' key={value.toLowerCase()}>{value}</option>
        ))}
      </select>
  )
}

export default MyComponent
