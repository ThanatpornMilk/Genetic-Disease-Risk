import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import HomeIcon from "../../assets/home.png";

const AutosomalRecessiveResult = () => {
  const [dadTraits, setDadTraits] = useState("");
  const [momTraits, setMomTraits] = useState("");
  const [selectedDisease, setSelectedDisease] = useState("");
  const navigate = useNavigate();

  const calculateProbabilities = (dad, mom) => {
    const combinations = {
      "AA+AA": { AA: 100, Aa: 0, aa: 0 },
      "AA+Aa": { AA: 50, Aa: 50, aa: 0 },
      "AA+aa": { AA: 0, Aa: 100, aa: 0 },
      "Aa+AA": { AA: 50, Aa: 50, aa: 0 },
      "Aa+Aa": { AA: 25, Aa: 50, aa: 25 },
      "Aa+aa": { AA: 0, Aa: 50, aa: 50 },
      "aa+AA": { AA: 0, Aa: 100, aa: 0 },
      "aa+Aa": { AA: 0, Aa: 50, aa: 50 },
      "aa+aa": { AA: 0, Aa: 0, aa: 100 },
    };

    const key = `${dad}+${mom}`;
    return combinations[key] || { AA: 0, Aa: 0, aa: 0 };
  };

  const resultText = dadTraits && momTraits
    ? `DAD Traits: ${dadTraits}, MOM Traits: ${momTraits}`
    : "Please select both DAD and MOM traits.";

  const probabilities = dadTraits && momTraits
    ? calculateProbabilities(dadTraits, momTraits)
    : null;

  useEffect(() => {
    const disease = localStorage.getItem("selectedDisease");
    if (disease) setSelectedDisease(disease);
  }, []);

  return (
    <div className="bg-neutral-200 min-h-screen flex flex-col justify-between font-inria">
      {/* Navbar */}
      <section className="bg-[#FFD676]">
        <nav className="flex p-4 items-center">
          <img className="w-10 h-10 mx-5" src={Logo} alt="Logo" />
          <h1 className="text-white text-4xl font-bold">
            Autosomal Recessive Result
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
        <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg p-6">
          {/* Select Parents */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex flex-col items-center">
              <label className="text-2xl md:text-4xl font-semibold">DAD</label>
              <select
                value={dadTraits}
                onChange={(e) => setDadTraits(e.target.value)}
                className="bg-gray-200 p-2 rounded-lg mt-2 text-xl md:text-2xl"
              >
                <option value="" disabled>Select Traits</option>
                <option value="AA">AA (Healthy)</option>
                <option value="Aa">Aa (Carrier)</option>
                <option value="aa">aa (Diseased)</option>
              </select>
            </div>

            <div className="border-l border-gray-300 h-20 mx-4"></div>

            <div className="flex flex-col items-center">
              <label className="text-2xl md:text-4xl font-semibold">MOM</label>
              <select
                value={momTraits}
                onChange={(e) => setMomTraits(e.target.value)}
                className="bg-gray-200 p-2 rounded-lg mt-2 text-xl md:text-2xl"
              >
                <option value="" disabled>Select Traits</option>
                <option value="AA">AA (Healthy)</option>
                <option value="Aa">Aa (Carrier)</option>
                <option value="aa">aa (Diseased)</option>
              </select>
            </div>
          </div>

          {/* Result Section */}
          <div className="bg-gray-300 p-4 rounded-lg flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mt-5 mb-4">THE ANALYSIS RESULT</h1>
            <div className="text-2xl font-semibold mb-5">
              {selectedDisease ? `Selected Disease: ${selectedDisease}` : "No disease selected."}
            </div>
            <div className="bg-white shadow-xl w-10/12 rounded-2xl mb-5 min-h-72 max-h-96 flex flex-col items-center justify-center p-5">
              <p className="text-2xl font-semibold text-center">{resultText}</p>
              {probabilities && (
                <div className="text-2xl mt-4 text-center">
                  Offspring Probabilities: <br />
                  Healthy (AA): {probabilities.AA}% <br />
                  Carrier (Aa): {probabilities.Aa}% <br />
                  Diseased (aa): {probabilities.aa}%
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutosomalRecessiveResult;
