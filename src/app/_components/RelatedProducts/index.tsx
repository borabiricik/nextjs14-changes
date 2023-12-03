import React from "react"
import { RelatedProduct } from "../RelatedProduct"
import { wait } from "@/app/_utils/wait"

type Props = {}

const RelatedProducts = async (props: Props) => {
  const relatedProducts = await wait(10000)
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">İlgili Ürünler</h2>
      <div className="grid md:grid-cols-4 gap-4">
        <RelatedProduct />
        <RelatedProduct />
        <RelatedProduct />
        <RelatedProduct />
      </div>
    </div>
  )
}

export default RelatedProducts
