import React from "react";
import imgHero from '../assets/img/hero-img.svg'
import Service from "./Service";
import Portfolio from "./Portfolio";
import FAQ from './FAQ'
import Team from './Team'
import Clients from "./Clients";
import Contact from "./Contact";
import About from './About'

const Home = () => {
    return (
        <>
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1>Bettter digital experience with Ninestars</h1>
                            <h2>We are team of talented designers making websites with Bootstrap</h2>
                            <div>
                                <a href="#about" className="btn-get-started scrollto">Get Started</a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img">
                            <img src={imgHero} className="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <Service />
            <Portfolio/>
            <FAQ/>
            <Team/>
            <Clients/>
            <Contact/>
            <About/>
        </>
    )
}

export default Home;