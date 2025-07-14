import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import HomeIcon from "../../assets/home.png";

const AutosomalRecessive = () => {
  const [selectedDisease, setSelectedDisease] = useState("");
  const navigate = useNavigate();

  const handleDone = () => {
    if (!selectedDisease) {
      alert("Please select a disease to proceed.");
    } else {
      localStorage.setItem("selectedDisease", selectedDisease);
      navigate("/autosomal-recessive/result");
    }
  };

  return (
    <div className="bg-neutral-200 min-h-screen flex flex-col justify-between font-inria">
      {/* Navbar */}
      <section className="bg-[#FFD676]">
        <nav className="flex p-4 items-center">
          <img className="w-10 h-10 mx-5" src={Logo} alt="Logo" />
          <h1 className="text-white text-4xl font-bold">
            Autosomal Recessive
          </h1>
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
        <div className="bg-white w-full max-w-5xl rounded-lg shadow-lg p-6">
          <section className="flex flex-col justify-around items-center">
            <div className="m-10">
              <ol className="sm:text-xl md:text-2xl mt-10 space-y-5">
                <li>
                  <p className="font-semibold">1. โรคเทย์-แซคส์ (Tay-Sachs)</p>
                  <p className="mt-3">
                    เป็นโรคที่ทำลายระบบประสาทส่วนกลางและสมอง เกิดจากการขาด Hexosaminidase A
                    ทำให้สารไขมันที่เรียกว่า GM2 ganglioside สะสมในสมองจนทำให้เซลล์สมองเสียหาย
                  </p>
                </li>
                <li>
                  <p className="font-semibold">2. โรคธาลัสซีเมีย (Thalassemia)</p>
                  <p className="mt-3">
                    เป็นโรคทางพันธุกรรมที่ทำให้การสร้างฮีโมโกลบินผิดปกติ ส่งผลให้เกิดภาวะโลหิตจางแบบเรื้อรัง
                    มีอาการเหนื่อยง่าย ผิวซีด ตัวเหลือง บางครั้งอาจมีการเจริญเติบโตช้าและเกิดภาวะกระดูกผิดรูป
                  </p>
                </li>
                <li>
                  <p className="font-semibold">3. โรคฟีนิลคีโตนูเรีย (Phenylketonuria)</p>
                  <p className="mt-3">
                    เป็นโรคที่เกิดจากการขาดเอนไซม์ที่ช่วยย่อยสลายกรดอะมิโนฟีนิลอะลานีน ส่งผลให้สมองพัฒนาได้ช้า
                  </p>
                </li>
              </ol>
            </div>

            {/* Dropdown */}
            <div>
              <select
                value={selectedDisease}
                onChange={(e) => setSelectedDisease(e.target.value)}
                className="bg-[#FFD676] p-5 rounded-full sm:text-xl md:text-2xl"
              >
                <option disabled value="">
                  Select the disease you want to analyze
                </option>
                <option value="Albinisms">
                  โรคเผือก (Albinisms)
                </option>
                <option value="Thalassemia">
                  โรคธาลัสซีเมีย (Thalassemia)
                </option>
                <option value="Phenylketonuria">
                  โรคฟีนิลคีโตนูเรีย (Phenylketonuria)
                </option>
              </select>
            </div>
          </section>

          {/* DONE Button */}
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

export default AutosomalRecessive;
