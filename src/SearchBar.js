import Data from "./data/db.json"
import './SearchBar.css'
import { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
    const [query, setQuery] = useState("")
    return (
        <div className="Container">
            <input placeholder="  Search Here..." onChange={event => setQuery(event.target.value)} />
            <br />
            <div>
                <div className="Contents">
                    {
                        Data.filter(res => {
                            if (query === '') {
                                return res;
                            } else if (res.Name.toLowerCase().includes(query.toLowerCase())) {
                                return res;
                            }
                        }).map((res, index) => (
                            <div className="box" key={index}>
                                <Link id="name" to= {`/${res.Name}`}>{res.Name}</Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default SearchBar;