import React from "react"

type Props = {}

const Details = (props: Props) => {
  return (
    <div className="animate-pulse-fast">
      <div className="bg-gray-300 h-8 w-3/4 mb-4"></div>
      <div className="bg-gray-300 h-6 w-1/2 mb-4"></div>
      <div className="bg-gray-300 h-6 w-1/4 mb-6"></div>
      <div className="bg-gray-300 h-10 w-1/4"></div>
    </div>
  )
}

export default Details
