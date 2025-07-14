import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import HomeIcon from "../../assets/home.png";

const SexLinkedRecessive = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const handleDone = () => {
    if (!selectedOption) {
      alert("Please select a disease to proceed.");
    } else {
      localStorage.setItem("selectedDisease", selectedOption);
      navigate("/x-linked-recessive/result");
    }
  };

  return (
    <div className="bg-neutral-200 min-h-screen flex flex-col justify-between font-inria">
      {/* Navbar */}
      <section className="bg-[#22CCAD]">
        <nav className="flex p-4 items-center">
          <img className="w-10 h-10 mx-5" src={Logo} alt="Logo" />
          <h1 className="text-white text-4xl font-bold">Sex-linked Recessive</h1>
          <button
            onClick={() => navigate("/home")}
            className="ml-auto mr-8 transform transition-transform duration-300 hover:scale-110"
          >
            <img className="w-14 h-14" src={HomeIcon} alt="Home" />
          </button>
        </nav>
      </section>

      {/* Content */}
      <div className="flex justify-center p-10 w-full">
        <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg p-6">
          {/* Description List */}
          <section className="flex flex-col justify-around items-center flex-grow">
            <div className="m-10">
              <ol className="sm:text-xl md:text-2xl mt-10 space-y-5">
                <li>
                  <p className="font-semibold">1. โรคฮีโมฟีเลีย (Hemophilia)</p>
                  <p className="mt-3">
                    &nbsp;&nbsp;&nbsp;&nbsp; การแข็งตัวของเลือดผิดปกติ ทำให้เลือดไหลออกนานกว่าปกติแม้บาดแผลเล็กน้อย บางครั้งอาจมีเลือดออกภายในตามข้อต่อ ทำให้เกิดอาการปวดและบวม
                  </p>
                </li>
                <li>
                  <p className="font-semibold">2. โรคตาบอดสี (Color Blindness)</p>
                  <p className="mt-3">
                    &nbsp;&nbsp;&nbsp;&nbsp; ไม่สามารถแยกแยะสีได้อย่างถูกต้อง โดยเฉพาะสีแดงและสีเขียว โรคนี้พบได้บ่อยในเพศชาย
                  </p>
                </li>
                <li>
                  <p className="font-semibold">3. โรค G6PD Deficiency (ภาวะพร่องเอนไซม์ G6PD)</p>
                  <p className="mt-3">
                    &nbsp;&nbsp;&nbsp;&nbsp; การขาดเอนไซม์ G6PD ทำให้เม็ดเลือดแดงเปราะและแตกง่ายเมื่อถูกกระตุ้นด้วยสารบางชนิด เช่น ยาและอาหารบางชนิดอาจทำให้เกิดภาวะโลหิตจางเฉียบพลัน ตัวเหลือง และปัสสาวะสีเข้ม
                  </p>
                </li>
              </ol>
            </div>

            {/* Disease Select */}
            <div>
              <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="bg-[#22CCAD] p-5 rounded-full sm:text-xl md:text-2xl text-white"
              >
                <option value="" disabled>Select the disease you want to analyze</option>
                <option value="Hemophilia" className="text-black">โรคฮีโมฟีเลีย (Hemophilia)</option>
                <option value="Color Blindness" className="text-black">โรคตาบอดสี (Color Blindness)</option>
                <option value="G6PD Deficiency" className="text-black">โรค G6PD Deficiency (ภาวะพร่องเอนไซม์ G6PD)</option>
              </select>
            </div>
          </section>

          {/* Done Button */}
          <div className="flex justify-end">
            <button
              onClick={handleDone}
              className="sm:text-xl md:text-2xl mt-10 mb-16 mr-8 bg-[#8D8D8D] hover:bg-black duration-300 text-white font-semibold px-16 py-5 rounded-full"
            >
              DONE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SexLinkedRecessive;
