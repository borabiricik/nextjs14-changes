import Image from "next/image"

export const RelatedProduct = () => (
  <div className="border p-4">
    <Image
      width={200}
      height={200}
      src="https://via.placeholder.com/200"
      alt="İlgili Ürün"
      className="mb-2"
    />
    <p>Ürün Adı</p>
  </div>
)
