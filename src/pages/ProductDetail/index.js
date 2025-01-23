import { useLocation } from 'react-router-dom';

import './ProductDetail.css';

function ProductDetail() {
    const { state } = useLocation();
    // console.log(state);
    console.log(useLocation());
    const product = state?.product;

    return (
        <div className="grid">
            <div className="ProductDetail">
                Chi tiet san pham
                {product ?
                    (
                        <div>
                            <h1>{product.title}</h1>
                            <img src={product.thumbnail} alt={product.title} />
                            <p>Price: ${product.price}</p>
                        </div>
                    ) :
                    (
                        <div>
                            <p>Loading... No product data found.</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default ProductDetail;