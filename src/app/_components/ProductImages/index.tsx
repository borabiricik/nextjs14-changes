import { wait } from "@/app/_utils/wait"
import Image from "next/image"
import React from "react"

type Props = {}

const ProductImages = async (props: Props) => {
  const productImages = await wait(2000)
  return (
    <div>
      <Image
        width={500}
        height={500}
        src="https://via.placeholder.com/500"
        alt="Ürün Resmi"
        className="w-full mb-4"
      />
      <div className="flex space-x-2">
        <Image
          width={100}
          height={100}
          src="https://via.placeholder.com/100"
          alt="Küçük Resim"
          className="w-1/4"
        />
        <Image
          width={100}
          height={100}
          src="https://via.placeholder.com/100"
          alt="Küçük Resim"
          className="w-1/4"
        />
        <Image
          width={100}
          height={100}
          src="https://via.placeholder.com/100"
          alt="Küçük Resim"
          className="w-1/4"
        />
        <Image
          width={100}
          height={100}
          src="https://via.placeholder.com/100"
          alt="Küçük Resim"
          className="w-1/4"
        />
      </div>
    </div>
  )
}

export default ProductImages
