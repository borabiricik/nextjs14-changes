import React from "react"

type Props = {}

const RelatedProducts = (props: Props) => {
  return (
    <div className="mt-8 animate-pulse-fast-fast">
      <div className="bg-gray-300 h-8 w-1/4 mb-4"></div>
      <div className="grid md:grid-cols-4 gap-4">
        <SkeletonRelatedProduct />
        <SkeletonRelatedProduct />
        <SkeletonRelatedProduct />
        <SkeletonRelatedProduct />
      </div>
    </div>
  )
}

const SkeletonRelatedProduct = () => (
  <div className="border p-4">
    <div className="bg-gray-300 h-32 w-full mb-3"></div>
    <div className="bg-gray-300 h-4 w-3/4"></div>
  </div>
)

export default RelatedProducts
