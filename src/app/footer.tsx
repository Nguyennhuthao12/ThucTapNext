import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h3 className="text-dark">FASHION</h3>
                        <div className="d-flex">
                            <Link href="#"><i className="fa-brands fa-facebook text-dark"></i></Link>
                            <Link href="#"><i className="fa-brands fa-twitter text-dark"></i></Link>
                            <Link href="#"><i className="fa-brands fa-google text-dark"></i></Link>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h5 className="text-dark">MAIN PAGES</h5>
                        <ul className="list-unstyled">
                            <li><Link href="#" className="text-dark">Sell with Us</Link></li>
                            <li><Link href="#" className="text-dark">About Us</Link></li>
                            <li><Link href="#" className="text-dark">Contact Us</Link></li>
                            <li><Link href="#" className="text-dark">Promos</Link></li>
                            <li><Link href="#" className="text-dark">Become an Ambassador</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="text-dark">POLICY</h5>
                        <ul className="list-unstyled">
                            <li><Link href="#" className="text-dark">Terms of Usage</Link></li>
                            <li><Link href="#" className="text-dark">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-dark">Return Policy</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="text-dark">SUBSCRIBE</h5>
                        <p className="text-dark">Subscribe to our newsletter, so that you can be the first to know about new offers and promotions.</p>
                        <form className="form-inline">
                            <input className="form-control mb-2 mr-sm-2" type="email" placeholder="Enter Email Address" required />
                            <button className="btn btn-dark mb-2">SUBSCRIBE</button>
                        </form>
                    </div>
                </div>
                <div className="row mt-4 align-items-center">
                    <div className="col text-left">
                        <p className="text-dark mb-0">&copy; 2024. Nguyễn Nhựt Hào</p>
                    </div>
                    <div className="col text-right">
                        <Link className="fa-brands-1 mx-2" href="#"><i className="fa-brands fa-cc-visa text-dark"></i></Link>
                        <Link className="fa-brands-1 mx-2" href="#"><i className="fa-brands fa-shopify text-dark"></i></Link>
                        <Link className="fa-brands-1 mx-2" href="#"><i className="fa-brands fa-paypal text-dark"></i></Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
