import categories from "./ApiCategories";
import "./Body.css";
function Departments() {
    return (
        
         <div id="department-container">

            {categories.map((category) => {
                return (
                    <div className="department-product " key={category.id}>
                        <div className="department">
                            <img
                                src={category.image}
                                alt={category.name}
                            />
                        </div>
                        <div className="department-info">
                            <h3>{category.name}</h3>
                        </div>
                    </div>
                    
                )
            })}

        </div>
    );
}
export default Departments;
