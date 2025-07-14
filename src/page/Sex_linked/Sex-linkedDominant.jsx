import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import HomeIcon from "../../assets/home.png";

const SexLinkedDominant = () => {
  const [selectedDisease, setSelectedDisease] = useState("");
  const navigate = useNavigate();

  const handleDone = () => {
    if (!selectedDisease) {
      alert("Please select a disease to proceed.");
    } else {
      navigate(`/x-linked-dominant/result`);
    }
  };

  return (
    <div className="bg-neutral-200 min-h-screen flex flex-col justify-between font-inria">
      {/* Navbar */}
      <section className="bg-[#5CC4E1]">
        <nav className="flex p-4 items-center">
          <img className="w-10 h-10 mx-5" src={Logo} alt="Logo" />
          <h1 className="text-white text-4xl font-bold">Sex-linked Dominant</h1>
          <button
            onClick={() => navigate("/home")}
            className="ml-auto mr-8 transform transition-transform duration-300 hover:scale-110"
          >
            <img className="w-14 h-14" src={HomeIcon} alt="Home" />
          </button>
        </nav>
      </section>

      {/* Main Content */}
      <div className="flex justify-center p-10 w-full">
        <div className="bg-white w-full max-w-5xl rounded-lg shadow-lg p-6">
          <section className="flex flex-col justify-around items-center">
            <div className="m-10">
              <ol className="sm:text-xl md:text-2xl mt-10 space-y-5">
                <li>
                  <p className="font-semibold">1. Rett Syndrome (การกลายพันธุ์ของยีนส์)</p>
                  <p className="mt-3">เป็นโรคทางระบบประสาทที่เกิดจากการกลายพันธุ์ในยีนส่งผลต่อการพัฒนาทางสมอง พบในเพศหญิงเป็นหลัก</p>
                </li>
                <li>
                  <p className="font-semibold">2. Fragile X Syndrome (กลุ่มอาการโครโมโซม X เปราะ)</p>
                  <p className="mt-3">เป็นโรคทางพันธุกรรมที่เกิดจากการกลายพันธุ์ในยีน FMR1 บนโครโมโซม X ทำให้เกิดปัญหาด้านพัฒนาการและสติปัญญา</p>
                </li>
                <li>
                  <p className="font-semibold">3. Hypertrichosis (ภาวะขนดกผิดปกติ)</p>
                  <p className="mt-3">เป็นภาวะที่ทำให้เกิดการเจริญเติบโตของขนในบริเวณต่าง ๆ ของร่างกายมากเกินไป อาจเกิดขึ้นทั่วทั้งร่างกายหรือเฉพาะบริเวณใดบริเวณหนึ่ง</p>
                </li>
              </ol>
            </div>

            {/* Dropdown */}
            <div>
              <select
                value={selectedDisease}
                onChange={(e) => setSelectedDisease(e.target.value)}
                className="bg-[#5CC4E1] p-5 rounded-full sm:text-xl md:text-2xl"
              >
                <option disabled value="">
                  Select the disease you want to analyze
                </option>
                <option value="Rett Syndrome">Rett Syndrome (การกลายพันธุ์ของยีนส์)</option>
                <option value="Fragile X Syndrome">Fragile X Syndrome (กลุ่มอาการโครโมโซม X เปราะ)</option>
                <option value="Hypertrichosis">Hypertrichosis (ภาวะขนดกผิดปกติ)</option>
              </select>
            </div>
          </section>

          {/* DONE button */}
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

export default SexLinkedDominant;
