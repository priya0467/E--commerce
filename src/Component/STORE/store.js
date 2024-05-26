import classes from "./store.module.css";
import { dataProducts, merchdata } from "./data";
import { useContext } from "react";
import CartContext from "../../Context/Cartcontext";

const Store = () => {
    const cartCtx = useContext(CartContext);

    const addToCartHandler = (product) => {
        

        cartCtx.addItem({
            id: product.id,
            name: product.titile,
            amount: 1, 
            price: product.price,
            image:product.image
           
        }
    );
    
    };

    return (
        <div className={classes.store}>
            <div className={classes.upper2}>
                <h1>The Generics</h1>
            </div>
            <div className={classes.lower3}>
                <div className={classes.lower22}>
                    <h1 className={classes.merchnt12}>Music</h1>
                </div>
                <div className={classes.products1}>
                    {dataProducts.map(product => (
                        <div key={product.id} className={classes.music}>
                            <h3>{product.titile}</h3>
                            <img src={product.image} alt={product.titile} />
                            <p>Price: ${product.price}</p>
                            <button onClick={() => addToCartHandler(product)}> Add to Cart</button>
                        </div>
                    ))}
                </div>
                <h2 className={classes.merchnt11}>Merch</h2>
                <div className={classes.merchnt}>
                    {merchdata.map(product => (
                        <div key={product.id} className={classes.product2}>
                            <h3>{product.titile}</h3>
                            <img src={product.image} alt={product.titile} />
                            <p>Price: ${product.price}</p>
                            <button onClick={() => addToCartHandler(product)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
                
                <div className={classes.lowerr3}>
                    <h1>The Generics</h1>
                    <div className={classes.you}>
                       <img src="https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg"/>
                    </div>
                    <div className={classes.ins}>
                        <img src="data:image/png;base64,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"/>
                    </div>
                    <div className={classes.fb}>
                        <img src="data:image/png;base64,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"/>
                    </div>
                  </div>
                  </div>
            
        </div>
    );
};

export default Store;
