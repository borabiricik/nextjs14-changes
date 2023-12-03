import React, { Suspense } from "react"
import ProductDetails from "./_components/ProductDetails"
import ProductImages from "./_components/ProductImages"
import RelatedProducts from "./_components/RelatedProducts"
import Images from "./_components/Skeletons/Images"
import Details from "./_components/Skeletons/Details"
import RelatedProductsLoading from "./_components/Skeletons/RelatedProducts"

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-4">
        <Suspense fallback={<Images />}>
          <ProductImages />
        </Suspense>
        <Suspense fallback={<Details />}>
          <ProductDetails />
        </Suspense>
      </div>
      <Suspense fallback={<RelatedProductsLoading />}>
        <RelatedProducts />
      </Suspense>
    </div>
  )
}

export default HomePage
