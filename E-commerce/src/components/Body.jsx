import './Body.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Departments from './Departments';
import BestSeller from './BestSeller';
function Body() {
    return (
        <>
            <div className="container">
                <div>
                    <div className='m-3 '>
                        <h3 className='font mt-5'>
                            <FontAwesomeIcon className="chevronIcon" id= 'ShopByDepartment'icon={faChevronRight} beat style={{ color: "#cb48c6", }} />
                            Shop By Department</h3>
                    </div>
                    <div>
                        <Departments />
                    </div>

                    <div className='m-3 '>
                        <h3 className='font mt-5'>
                            <FontAwesomeIcon className="chevronIcon" icon={faChevronRight} beat style={{ color: "#cb48c6", }} />
                            Best Seller</h3>
                    </div>
                    <div>
                        <BestSeller />
                    </div>
                </div>
            </div>


        </>
    )
} export default Body;