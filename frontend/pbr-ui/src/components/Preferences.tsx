import { useState } from "react";
import Button from "./ui/Button";
import PreferenceCard from "./PreferenceCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BACKEND_URL = "http://localhost:3000"

export default function Preferences() {
  const [selectedPrefs, setSelectedPrefs] = useState<{ [key: string]: boolean }>({
    action: false,
    adventure: false,
    comedy: false,
    drama: false,
    fantasy: false,
    horror: false,
    mystery: false,
    romance: false,
    sciFi: false,
    thriller: false,
    documentary: false,
    animation: false,
    crime: false,
    musical: false,
    historical: false
  });
  const navigate = useNavigate();

  function toggleSelection(pref: string) {
    setSelectedPrefs(prev => ({ ...prev, [pref]: !prev[pref] }));
  }

  async function handleOnClick() {
    const preferredPreferences: any = [];
    Object.keys(selectedPrefs).forEach((pref) => {
      if (selectedPrefs[pref]) preferredPreferences.push(pref);
    });
    console.log(selectedPrefs);
    console.log(preferredPreferences);
    await axios.post(BACKEND_URL + "/pref", {
      pref: preferredPreferences,
    },
      {
        headers: {
          "Authorization": localStorage.getItem("token")
        }
      });
    alert("Preferences have been set!");
    navigate("/");
  }

  return (
    <div className="bg-gray-300 bg-opacity-80 flex justify-center items-center w-screen h-screen">
      <div className="bg-white p-8 rounded-md">
        <h2 className="text-2xl">Select your preferences:</h2>
        <div
          id="prefs"
          className="grid grid-cols-6 gap-2 text-wrap pb-4"
        >
          {Object.keys(selectedPrefs).map(pref => (
            <PreferenceCard
              key={pref}
              text={pref}
              isSelected={selectedPrefs[pref]}
              onClick={() => toggleSelection(pref)}
            />
          ))}
        </div>
        <div className="flex justify-end">
          <Button size="md" text={"Submit!"} variant="primary" onClick={handleOnClick}></Button>
        </div>
      </div>
    </div>

  );
}
