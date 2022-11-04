import image from "./images/favicon.ico";
import './sign.css'

const sign = () => {
    return (
        <div className="box-form">
            <div className="left">
                <div className="overlay">
                    <h3 style={{marginTop: "25%"}}>IIT KGP Restaurants</h3>
                    <p >A one stop destination to find all the well-known restaurants in IIT Kharagpur Campus</p>
                    <span>
                        <p>login with social media</p>
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i> Login with Twitter</a>
                    </span>
                </div>
            </div>


            <div className="right" style={{margin: "10px 40px"}}>
                <img src={image} alt="" />
                <div className="inputs">
                    <input type="text" placeholder="user name" />
                    <br />
                    <input type="password" placeholder="password" />
                </div>
                <br /><br />

                <div className="remember-me--forget-password">
                    <label>
                        <input type="checkbox" name="item" style={{boxShadow: "0px 0px"}} />
                        <span className="text-checkbox">Remember me</span>
                    </label>
                    <p>forget password?</p>
                </div>

                <br />
                <button><a href="/KgpRestaurants" style={{textDecoration: "none", color: "white"}}>Submit</a></button>
            </div>
        </div>
    )
}

export default sign;