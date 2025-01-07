
import phones from "./ApiBestProduct";
import "./Body.css";

function BestSeller() {
    return (
        <>
         <div id="products-container">
            {phones.map((phone) => {
                return (
                    
                        <div className = "product-card " key={phone.id}>
                            <div className="product-image " >
                                <img
                                    src={phone.image}
                                    alt={phone.name}
                                />
                            </div>
                            <div className=" product-info" >
                                <h3>{phone.name}</h3>
                                {/* <p>LE {price}</p> */}
                            </div>
                        </div>

                    
                )
            })}
        </div>
        </>
    )
}


export default BestSeller;