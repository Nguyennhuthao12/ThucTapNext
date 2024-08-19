
import Link from "next/link";
import Products_1 from "./components/ProductSection1";
import Products_2 from "./components/ProductSection2";
import Banner from "./components/Banner";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
        <div id="bannerCarousel" className="carousel slide" data-bs-ride="carousel">
            <Banner/>
        </div>
        <section className="new-arrivals py-5 bg-light">
            <Products_1/>
        </section>
        <section  className="new-arrivals pb-5 bg-light">
            <div className="container">
                <h3 className="text-left mb-4">NEW ARRIVALS</h3>
                <Products_2/>
            </div>
        </section>
    </>
  );
}
