const ProductList = ({ productList }) => {
  return (
    <>
      {productList.map((product, index) => (
        <div key={index} className="txt-in-box">
            Your annual premium is <br/>
            <span className="txt-original">{product.baseAnnualPremium}</span> Bath
        </div>
      ))}
    </>
  )
}

export default ProductList
