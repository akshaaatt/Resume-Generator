import React from 'react'
import { TbMoon, TbSun } from 'react-icons/tb'

const ThemeToggle = ({ onClick, theme }) => {
  return (
    <div className="flex w-20 p-1 m-2 bg-gray-300 rounded-full dark:bg-gray-500 dark:text-white gap-2">
      <div
        className={`flex items-center justify-center flex-1 p-1 cursor-pointer gap-1
                            ${theme === 'light' && 'bg-gray-200'} rounded-full`}
        onClick={() => onClick('light')}
      >
        <TbSun size={16} />
      </div>
      <div
        className={`flex items-center justify-center flex-1 p-1 cursor-pointer gap-1
                            ${
                              theme === 'dark' && 'bg-gray-200 dark:bg-gray-600'
                            } rounded-full`}
        onClick={() => onClick('dark')}
      >
        <TbMoon size={16} />
      </div>
    </div>
  )
}

export default ThemeToggle
