import Data from './data/db.json';
import Image from './images/restaurants/5.jpg';
import './Mio_Amore.css';

const Dreamland_Restaurant = () => {
    return (
        <div className='Box'>
            <img src={Image} className="img-fluid" alt="..." style={{ background: "white", marginTop: "50px" }}></img>
            {
                Data.filter(res => {
                    if (res.id === 5)
                        return res;
                }).map((res, index) => (
                    <div className="Cont">
                        <h3>{res.Name}</h3>
                        <p>{res.Details}</p>
                        <div className="buttons">
                            <a className="btn btn-primary" href={res.Location} role="button" style={{ backgroundColor: "#ffda00", color: "brown" }}>Location</a>

                            {/* Button trigger modal */}
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ backgroundColor: "#39cf55", color: "brown" }}>
                                Menu Card
                            </button>

                            {/* Modal */}
                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Menu Card</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            1. Naan<br />
                                            2. Butter Naan<br />
                                            3. Chicken Handi<br />
                                            4. Veg Biryani<br />
                                            5. Chicken Kabab<br />
                                            6. Panner Tikka<br />
                                            7. Chicken Biryani<br />
                                            8. Paneer Kadai<br />
                                            9. Matar Paneer<br />
                                            10. Chicken Resmi Kabab<br />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form action="">
                            <textarea name="myText" cols="50" rows="5" placeholder="  Comment about Restaurant menu..."></textarea>
                            <div class="buttons">
                                <input type="submit" value="Submit Now" />
                                <input type="reset" value="Reset" />
                            </div>
                        </form>
                    </div>
                ))
            }
        </div>
    );
}

export default Dreamland_Restaurant;