import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import HomeIcon from "../../assets/home.png";

const AutosomalDominant = () => {
  const [selectedDisease, setSelectedDisease] = useState("");
  const navigate = useNavigate();

  const handleDone = () => {
    if (!selectedDisease) {
      alert("Please select a disease to proceed.");
    } else {
      localStorage.setItem("selectedDisease", selectedDisease);
      navigate("/autosomal-dominant/result"); // หรือใช้ route ที่คุณกำหนด
    }
  };

  return (
    <div className="bg-neutral-200 min-h-screen flex flex-col justify-between font-inria">
      {/* Navbar */}
      <section className="bg-[#F78EBF]">
        <nav className="flex p-4 items-center">
          <img className="w-10 h-10 mx-5" src={Logo} alt="Logo" />
          <h1 className="text-white text-4xl font-bold">Autosomal Dominant</h1>
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
                  <p className="font-semibold">1. โรคฮันติงตัน (Huntington's disease)</p>
                  <p className="mt-3">
                    เป็นภาวะทางระบบประสาท ทำให้มีการเคลื่อนไหวที่ไม่เป็นระเบียบ ควบคุมไม่ได้ การเสื่อมของสมอง ความจำเสื่อม และส่งผลกระทบต่อพฤติกรรม
                  </p>
                </li>
                <li>
                  <p className="font-semibold">2. โรคกระดูกพรุนชนิดหนึ่ง (Osteogenesis Imperfecta)</p>
                  <p className="mt-3">
                    เป็นภาวะที่ทำให้กระดูกเปราะและหักง่ายเนื่องจากความผิดปกติในการสร้างคอลลาเจน อาจมีอาการฟันเปราะและสูญเสียการได้ยินร่วมด้วย โรคนี้มีหลายชนิดซึ่งแตกต่างกันในระดับความรุนแรง
                  </p>
                </li>
                <li>
                  <p className="font-semibold">3. Brachydactyly (ภาวะนิ้วสั้น)</p>
                  <p className="mt-3">
                    เป็นภาวะที่นิ้วมือหรือนิ้วเท้าสั้นกว่าปกติ เนื่องจากความผิดปกติของการเจริญเติบโตของกระดูกนิ้ว
                  </p>
                </li>
              </ol>
            </div>

            {/* Dropdown */}
            <div>
              <select
                value={selectedDisease}
                onChange={(e) => setSelectedDisease(e.target.value)}
                className="bg-[#F78EBF] p-5 rounded-full sm:text-xl md:text-2xl"
              >
                <option disabled value="">
                  Select the disease you want to analyze
                </option>
                <option value="Huntington's disease">โรคฮันติงตัน (Huntington's disease)</option>
                <option value="Osteogenesis Imperfecta">โรคกระดูกพรุนชนิดหนึ่ง (Osteogenesis Imperfecta)</option>
                <option value="Brachydactyly">Brachydactyly (ภาวะนิ้วสั้น)</option>
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

export default AutosomalDominant;
