import bg1 from './images/bg1.jpg';
import bg2 from './images/bg2.webp';
import bg3 from './images/bg3.jpg';
import './home.css';

const home = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={bg1} className="d-block w-100" alt="Some Error Occurred" height='475px' width='1200px' />
                    </div>
                    <div className="carousel-item">
                        <img src={bg2} className="d-block w-100" alt="Some Error Occurred" height='475px' width='1200px' />
                    </div>
                    <div className="carousel-item">
                        <img src={bg3} className="d-block w-100" alt="Some Error Occurred" height='475px' width='1200px' />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="Content" style={{fontFamily: "'Kolker Brush', cursive", backgroundColor: "rgba(221, 250, 193, 0.512)"}}>
                <h2 style={{fontSize: "80px"}}>This page contains the list of all the eateries at IIT KGP</h2>
            </div>
        </div>
    );
}

export default home;