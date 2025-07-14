import React from "react";
import { useNavigate } from "react-router-dom";
import LogoImage from "../assets/Logo.png";
import DNAImage from "../assets/DNA.png";

const WelcomePage = () => {
    const navigate = useNavigate();

    return (
        <section className="sec-bg flex flex-col relative h-screen w-screen justify-center bg-gradient-to-r from-black to-[#1CB99C] text-3xl font-inria font-serif">
            <div className="div-conten flex flex-col items-center justify-center text-white mb-72 z-10">
                <img className="h-36 m-5" src={LogoImage} alt="Logo" />
                <h1 className="text-center md:text-5xl 2xl:text-8xl m-5">
                    Genetic Disease <br /> Risk Calculator
                </h1>
                <h4 className="text-center md:text-4xl 2xl:text-5xl m-5">
                    Calculate the risk of disease
                </h4>
            </div>

            <div className="absolute ml-16 z-0">
                <img className="h-screen" src={DNAImage} alt="DNA" />
            </div>

            <div className="div-bottom absolute bottom-0 w-full z-10">
                <div className="bg-gray-300 w-full md:h-14 2xl:h-16 flex items-end justify-end relative">
                    <button
                        onClick={() => navigate("/home")}
                        className="md:text-4xl 2xl:text-5xl py-5 md:py-6 px-16 2xl:py-8 group rounded-tl-full font-semibold bg-white"
                    >
                        <div className="relative">
                            <p>START</p>
                            <span className="absolute -bottom-2 left-0 w-0 h-2 bg-black transition-all group-hover:w-full"></span>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WelcomePage;
