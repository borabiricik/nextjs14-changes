import React from "react"

type Props = {}

const Images = (props: Props) => {
  return (
    <div className="animate-pulse-fast">
      <div className="bg-gray-300 h-[500px] w-[500px] mb-4"></div>
      <div className="flex space-x-2">
        <div className="bg-gray-300 h-16 w-1/4"></div>
        <div className="bg-gray-300 h-16 w-1/4"></div>
        <div className="bg-gray-300 h-16 w-1/4"></div>
        <div className="bg-gray-300 h-16 w-1/4"></div>
      </div>
    </div>
  )
}

export default Images
