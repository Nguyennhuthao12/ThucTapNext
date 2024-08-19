import Link from "next/link";

const Header: React.FC = () => {
    return (
        <header className="bg-light py-0">
            <div className="container header-container py-3">
                <div className="row align-items-center">
                    <div className="col-md-2 logo">
                        <Link className="navbar-brand" href={'/'}>
                           FASHION
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group search-bar">
                            <input type="text" className="form-control" placeholder="Type in and hit Enter" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary search-button">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-right header-links">
                        <Link className="text-dark" href="#">
                            <i className="fa-solid fa-cart-shopping"></i> Cart
                        </Link>
                        <span className="mx-2">|</span>
                        <Link className="text-dark" href="#">                       
                            <i className="fa-solid fa-user"></i> User
                        </Link>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link" href="#">
                                    ALL BRANDS <i className="fa-solid fa-caret-down"></i>
                                </Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" href="#">SKINCARE</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="#">MAKE UP</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="#">HAIR CARE</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="#">BATH & BODY</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="#">BEAUTY SUPPLEMENTS</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="#">PROMOS</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
