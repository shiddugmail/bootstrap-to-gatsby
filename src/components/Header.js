import React from "react"
import { Link } from "gatsby"


const Header = () => {

return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" id="top">
            <Link className="navbar-brand" to="/">Bhadrannavar Dental clinic-Banahatti</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse" >
            <ul className="navbar-nav mr-auto text-right">
            </ul>
                <form className="form-inline mt-2 mt-md-0 ">
                    <ul className="navbar-nav mr-auto text-right">
                        <li className="nav-item active">
                            <Link className="nav-link" to="#Top">Home </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="#About-Clinic">About Clinic </Link>
                        </li>
                        <li class="nav-item active">
                            <Link className="nav-link" to="#About-Doctor">About Dentist </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="#Treatments">Treaments </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="#Smile-Transformations">Transformations </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="#Reviews">Reviews </Link>
                        </li>                        
                    </ul>
                </form>
            </div>
        </nav>
    )
}

export default Header