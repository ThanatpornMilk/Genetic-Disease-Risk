import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import AD from "../assets/AD.png";
import AR from "../assets/AR.png";
import XD from "../assets/XD.png";
import XR from "../assets/XR.png";
import InfoIcon from "../assets/information.png";

const HomePage = () => {
    const [popup, setPopup] = useState(null);
    const navigate = useNavigate();

    const routeMap = {
        AD: "/autosomal-dominant",
        AR: "/autosomal-recessive",
        XD: "/x-linked-dominant",
        XR: "/x-linked-recessive",
    };

    const diseases = [
        {
            id: "AD",
            img: AD,
            bg: "#F78EBF",
            label: "Autosomal\nDominant",
            popupTitle: "Autosomal Dominant (AD)",
            description:
                "เป็นรูปแบบการถ่ายทอดทางพันธุกรรมที่เกิดจากความผิดปกติบนโครโมโซมร่างกาย ซึ่งไม่เกี่ยวข้องกับเพศของผู้สืบทอด หากพ่อหรือแม่มีความผิดปกติจะมีโอกาส 50% ที่จะถ่ายทอดยีนที่ผิดปกติไปยังลูกไม่ว่าจะเป็นเพศชาย หรือ เพศหญิงก็ตาม โดยทั่วไปอัตราส่วนระหว่างเด็กที่ได้รับผลกระทบกับเด็กที่ไม่ได้รับผลกระทบจะอยู่ที่ประมาณ 1:1",
        },
        {
            id: "AR",
            img: AR,
            bg: "#FFD676",
            label: "Autosomal\nRecessive",
            popupTitle: "Autosomal Recessive (AR)",
            description:
                "เป็นรูปแบบการถ่ายทอดทางพันธุกรรมที่เกิดขึ้นเมื่อยีนผิดปกติอยู่บนโครโมโซมร่างกายและจะแสดงอาการ หรือ ความผิดปกติเมื่อได้รับยีนผิดปกติมาจากทั้งพ่อและแม่คนละแท่งในกรณีที่พ่อหรือแม่เป็นพาหะจะไม่แสดงอาการ แต่สามารถถ่ายทอดยีนผิดปกตินี้ไปยังลูกได้ถ้าลูกได้รับยีนผิดปกติจากทั้งพ่อและแม่ลูกจะมีโอกาสแสดงความผิดปกติ",
        },
        {
            id: "XD",
            img: XD,
            bg: "#5CC4E1",
            label: "X-linked\nDominant",
            popupTitle: "X-linked Dominant (XD)",
            description:
                "เป็นรูปแบบการถ่ายทอดความผิดปกติทางพันธุกรรมที่เกิดจากยีนผิดปกติบนโครโมโซมเพศ X ลักษณะนี้สามารถส่งผลกระทบต่อทั้งเพศชายและเพศหญิงแต่ผลกระทบจะแตกต่างกันไปตามเพศ เนื่องจากเพศชายมีโครโมโซม X เพียงหนึ่งแท่งในขณะที่เพศหญิงมีโครโมโซม X สองแท่งในกรณีที่พ่อที่มีความผิดปกติจะส่งต่อโครโมโซม X ให้ลูกสาวทุกคนแม่ที่มีความผิดปกติจะมีโอกาส 50% ที่จะถ่ายทอดยีนผิดปกติไปยังลูกทั้งเพศชายและเพศหญิง",
        },
        {
            id: "XR",
            img: XR,
            bg: "#22CCAD",
            label: "X-linked\nRecessive",
            popupTitle: "X-linked Recessive (XR)",
            description:
                "เป็นรูปแบบการถ่ายทอดทางพันธุกรรมที่เกิดจากยีนผิดปกติที่อยู่บนโครโมโซมเพศ X ความผิดปกตินี้จะแสดงอาการเมื่อมียีนผิดปกติหนึ่งแท่งในเพศชายและสองแท่งในเพศหญิงเพศหญิงจะได้รับผลกระทบก็ต่อเมื่อได้รับยีนผิดปกติจากทั้งพ่อและแม่ เพศหญิงที่มียีนผิดปกติหนึ่งแท่งบนโครโมโซม X จะเป็นพาหะที่สามารถถ่ายทอดยีนนี้ไปยังลูกได้ เพศชายที่ได้รับยีนผิดปกติจากแม่จะได้รับผลกระทบ",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <section className="bg-[#1CB99C]">
                <nav className="flex p-4 items-center">
                    <img className="w-10 h-10 mx-5" src={Logo} alt="Logo" />
                    <h1 className="text-white text-4xl font-bold font-inria">
                        Genetic Disease Risk Calculator
                    </h1>
                </nav>
            </section>

            <section>
                <div className="flex flex-wrap justify-center items-center w-full py-10">
                    {diseases.map(({ id, img, bg, label, popupTitle, description }) => (
                        <div key={id} className="flex flex-col items-center justify-center relative mx-5 my-5">
                            <img
                                src={img}
                                alt={id}
                                className={`w-36 md:w-48 lg:w-60 2xl:w-80 ${id === "AD" ? "scale-x-[-1]" : ""}`}
                            />
                            <button onClick={() => setPopup(id)} className="absolute top-2 right-2">
                                <img src={InfoIcon} alt="Info" className="w-6 h-6" />
                            </button>
                            <button
                                className="font-inria font-semibold my-10 px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-full text-xl md:text-2xl transition duration-500 hover:scale-125"
                                style={{ backgroundColor: bg }}
                                onClick={() => navigate(routeMap[id])}
                            >
                                {label.split("\n").map((line, i) => (
                                    <div key={i}>{line}</div>
                                ))}
                            </button>

                            {popup === id && (
                                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                    <div className="bg-white p-8 rounded-lg w-3/4 max-w-3xl">
                                        <h2 className="text-4xl font-bold mb-4">{popupTitle}</h2>
                                        <p className="text-2xl whitespace-pre-line">{description}</p>
                                        <div className="flex justify-end mt-5">
                                            <button onClick={() => setPopup(null)} className="px-6 py-3 text-xl bg-red-500 text-white rounded">
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomePage;
