const Products = ({ data, title }) => {
    return ( 
        <div>
            <h3>The { title } details are </h3>
            {data.map(product => (
                <div key={ product.id }>
                    <h5>Name of the product</h5>
                    <h6>{ product.name }</h6>
                    <h5>Category of the product</h5>
                    <h6>{ product.category }</h6>
                    <h5>Amount of the product</h5>
                    <h6>{ product.price }</h6>
                    <h5>Specs of the product</h5>
                    <h6>{ product.specs }</h6>
                </div>
            ))}
        </div>
     );
}
 
export default Products;