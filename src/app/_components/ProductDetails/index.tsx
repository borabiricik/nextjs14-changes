import { wait } from "@/app/_utils/wait"
import React from "react"

type Props = {}

const ProductDetails = async (props: Props) => {
  const comments = await wait(5000)
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Ürün Adı</h1>
      <p className="text-lg mb-4">Kısa açıklama ve detaylar.</p>
      <div className="text-xl font-semibold mb-4">₺150.00</div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Sepete Ekle
      </button>

      {/* Yorumlar ve Puanlama */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Müşteri Yorumları</h2>
        <div className="border-t border-gray-200 pt-2">
          <p>
            <strong>Kullanıcı 1:</strong> Harika bir ürün!
          </p>
          <p>
            <strong>Kullanıcı 2:</strong> Beklentilerimi karşıladı.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
