import { Link } from "react-router-dom";

function Clothes({itemsFormSale}) {
return(
    <div className="products">
        {itemsFormSale.map((element => {
            const {id, name, searchTerm, price, image} = element;

            return(
                <div className="product-card" key={id}>
                    <Link to={'/about/${item.title}'}>
                        <img src={image} alt='Clothes' width='200px' height='300px' />
                    </Link>
                    <div className="product-info">
                        <h3>{name}</h3>
                        <p>Price: ${price}</p>
                    </div>
                </div>
            )
        }))}
    </div>
)
}

export default Clothes;