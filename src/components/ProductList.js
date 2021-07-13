const ProductList = ({ productList }) => {
  return (
    <>
      {productList.map((product, index) => (
        <div key={index} className="txt-in-box">
            Your base annual premium is <span className="txt-original">{product.baseAnnualPremium}</span> Bath
        </div>
      ))}
    </>
  )
}

export default ProductList
