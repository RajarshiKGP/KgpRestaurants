import Data from './data/db.json';
import Image from './images/restaurants/1.jpg';
import './Mio_Amore.css';

const mio_amore = () => {
    return (
        <div className='Box'>
            <img src={Image} className="img-fluid" alt="..." style={{ background: "white", marginTop: "50px" }}></img>
            {
                Data.filter(res => {
                    if (res.id === 1)
                        return res;
                }).map((res, index) => (
                    <div className="Cont">
                        <h3>{res.Name}</h3>
                        <p>{res.Details}</p>
                        <div className="buttons">
                            <a className="btn btn-primary" href={res.Location} role="button" style={{backgroundColor: "#ffda00", color: "brown"}}>Location</a>

                            {/* Button trigger modal */}
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{backgroundColor: "#39cf55", color: "brown"}}>
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
                                            1. Blueberry Puree<br />
                                            2. Black Forest<br />
                                            3. Dual Forest<br />
                                            4. Choco Blossom<br />
                                            5. Butterscotch<br />
                                            6. Mango Samao<br />
                                            7. Choco Fantacy<br />
                                            8. Rich Dutch Chocolate<br />
                                            9. Marble Mania<br />
                                            10. Blueberry Puree<br />
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

export default mio_amore;