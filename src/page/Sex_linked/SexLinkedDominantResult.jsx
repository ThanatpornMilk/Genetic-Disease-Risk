import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import HomeIcon from "../../assets/home.png";

const SexLinkedDominantResult = () => {
  const [dadTraits, setDadTraits] = useState("");
  const [momTraits, setMomTraits] = useState("");
  const [selectedDisease, setSelectedDisease] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const calculateProbabilities = (dad, mom) => {
    const combinations = {
      "XᴬY+XᴬXᴬ": { daughterDisease: 100, sonDisease: 100 },
      "XᴬY+XᴬXᵃ": { daughterDisease: 100, sonDisease: 50 },
      "XᴬY+XᵃXᵃ": { daughterDisease: 100, sonDisease: 0 },
      "XᵃY+XᴬXᴬ": { daughterDisease: 100, sonDisease: 100 },
      "XᵃY+XᴬXᵃ": { daughterDisease: 50, sonDisease: 50 },
      "XᵃY+XᵃXᵃ": { daughterDisease: 0, sonDisease: 0 },
    };
    const key = `${dad}+${mom}`;
    return combinations[key] || { daughterDisease: 0, sonDisease: 0 };
  };

  const resultText =
    dadTraits && momTraits
      ? `DAD Traits: ${dadTraits}, MOM Traits: ${momTraits}`
      : "Please select both DAD and MOM traits.";

  const probabilities =
    dadTraits && momTraits
      ? calculateProbabilities(dadTraits, momTraits)
      : null;

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const disease = query.get("disease");
    if (disease) setSelectedDisease(disease);
  }, [location]);

  return (
    <div className="bg-neutral-200 min-h-screen flex flex-col justify-between font-inria">
      {/* Navbar */}
      <section className="bg-[#5CC4E1]">
        <nav className="flex p-4 items-center">
          <img className="w-10 h-10 mx-5" src={Logo} alt="Logo" />
          <h1 className="text-white text-4xl font-bold">Sex-linked Dominant Result</h1>
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
        <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg p-6">
          {/* Selection Inputs */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex flex-col items-center">
              <label className="text-2xl md:text-4xl font-semibold">DAD</label>
              <select
                value={dadTraits}
                onChange={(e) => setDadTraits(e.target.value)}
                className="bg-gray-200 p-2 rounded-lg mt-2 text-xl md:text-2xl"
              >
                <option value="" disabled>Select Traits</option>
                <option value="XᴬY">XᴬY (Diseased)</option>
                <option value="XᵃY">XᵃY (Healthy)</option>
              </select>
            </div>

            <div className="border-l border-gray-300 h-20 mx-4" />

            <div className="flex flex-col items-center">
              <label className="text-2xl md:text-4xl font-semibold">MOM</label>
              <select
                value={momTraits}
                onChange={(e) => setMomTraits(e.target.value)}
                className="bg-gray-200 p-2 rounded-lg mt-2 text-xl md:text-2xl"
              >
                <option value="" disabled>Select Traits</option>
                <option value="XᴬXᴬ">XᴬXᴬ (Diseased)</option>
                <option value="XᴬXᵃ">XᴬXᵃ (Diseased)</option>
                <option value="XᵃXᵃ">XᵃXᵃ (Healthy)</option>
              </select>
            </div>
          </div>

          {/* Result Display */}
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
                  Daughter Diseased: {probabilities.daughterDisease}% <br />
                  Son Diseased: {probabilities.sonDisease}%
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SexLinkedDominantResult;
