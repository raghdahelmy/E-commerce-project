import img from "../assets/banner 1.jpg"
function Header() {
    return (
        <>
            <section className='container-fluid p-0 mb-5' >
                <div className='row'></div>
                <div>
                    <img src={img} className="w-100"  />
                </div>
            </section>
        </>
    )
}


export default Header;
