import React, { useState, useEffect } from "react";
import { countries } from "../../../../../public/data/country";
import axios from "axios";
import { BiSolidEdit } from "react-icons/bi";

function Freelancer1() {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedProficiency, setSelectedProficiency] = useState("");


  const [profiledata, setProfiledata] = useState({
    firstname: "",
    lastname: "",
    occupation: "",
    university: "",
    region: "",
    city: "",
    portfolioLinks: "",
    description: "",
    skills: "",
    languages: [], // Start with an empty array
    contact: "",
    email: "",
  });

  const skillOptions = [
    "Video Editor",
    "Photo Editor",
    "Canva Expert",
    "Invitation Card",
    "Web Developer",
    "UI/UX Designer",
    "Mockups",
    "Graphic Designer",
  ];

  const handleAddLanguage = () => {
    if (selectedLanguage && selectedProficiency) {
      // Check for duplicates
      const isDuplicate = profiledata.languages.some(
        (lang) => lang.language === selectedLanguage
      );

      if (!isDuplicate) {
        setProfiledata((prev) => ({
          ...prev,
          languages: [
            ...prev.languages,
            { language: selectedLanguage, proficiency: selectedProficiency },
          ],
        }));

        // Clear inputs
        setSelectedLanguage(""); // Reset language dropdown
        setSelectedProficiency(""); // Reset proficiency dropdown
      } else {
        alert("This language is already added.");
      }
    } else {
      alert("Please select both a language and a proficiency.");
    }
  };
  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setProfiledata((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  console.log(profiledata);

  const handleSelectChange = (e) => {
    const { id, value } = e.target;
    setProfiledata((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  let userId = localStorage.getItem("_id");
  console.log(userId);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = localStorage.getItem("_id");
    if (!userId) {
      console.error("User ID not found in localStorage");
      // You can also display a user-friendly message here or redirect to login page
      return;
    }

    const payload = { ...profiledata, userId }; // Ensure you include the userId properly

    console.log(payload);

    axios
      .post("http://localhost:8000/api/profile", payload)
      .then((response) => {
        console.log("Form submitted successfully:", response.data);
        // Reset form if necessary
        setProfiledata({
          firstname: "",
          lastname: "",
          occuption: "",
          university: "",
          region: "",
          city: "",
          portfoliolinks: "",
          description: "",
          skills: [],
          languages: [],
          contact: "",
          email: "",
        });
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [skills, setSkills] = useState("Invitation Card"); // Default to "Invitation Card"
  // const userId = localStorage.getItem("_id");

  const fetchProfiles = async () => {
    if (!userId) {
      setError("User ID not found");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `http://localhost:8000/api/getprofile?userId=${userId}`
      );

      // Ensure profiles is always an array
      const fetchedProfiles = Array.isArray(response.data.data)
        ? response.data.data
        : [response.data.data];

      setProfiles(fetchedProfiles);
      console.log("Fetched Profiles:", fetchedProfiles);
    } catch (err) {
      setError(err.response?.data?.error || "Error fetching profiles");
    } finally {
      setLoading(false);
    }
  };
  // Automatically fetch profiles when the component loads
  useEffect(() => {
    fetchProfiles();
  }, []);
  const [modal, setModal] = useState(false);
  const editHandle = () => {
    setModal(!modal);
  };

  return (
    <>

      <div className="flex flex-col w-full min-h-screen 320:p-0 p-4">

        {/* -------------------data entry--------------------- */}

        <div className="w-full  sm:w-full lg:w-full flex flex-col p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>

            <div className="flex  flex-col sm:flex-row justify-between mb-4">
              <div className="w-full sm:w-[48%] mb-4 sm:mb-0">
                <label
                  htmlFor="firstname"
                  className="block mb-2 text-sm sm:text-base lg:text-lg">
                  First Name
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    value={profiledata.firstname || ""}
                    id="firstname"
                    onChange={handleChange}
                    className="w-full lg:h-10 sm:h-8 p-2 border border-gray-300 rounded-md"
                  />
                  {userId ? (
                    <i
                      className="text-2xl cursor-pointer"
                      onClick={editHandle}>
                      <BiSolidEdit />
                    </i>
                  ) : null}
                </div>
              </div>

              <div className="w-full sm:w-[48%]">
                <label
                  htmlFor="lastname"
                  className="block mb-2 text-sm sm:text-base lg:text-lg">
                  Last Name
                </label>
                <input
                  type="text"
                  value={profiledata.lastname}
                  id="lastname"
                  onChange={handleChange}
                  className="w-full lg:h-10 sm:h-8 p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* Occupation */}
            <div className="mb-4">
              <label
                htmlFor="occuption"
                className="block mb-2 text-sm sm:text-base lg:text-lg">
                Occupation
              </label>
              <input
                value={profiledata.occuption}
                onChange={handleChange}
                type="text"
                id="occuption"
                placeholder="Ex: Senior Designer, Art Director, Student"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* University */}
            <div className="mb-4">
              <label
                htmlFor="university"
                className="block mb-2 text-sm sm:text-base lg:text-lg">
                University
              </label>
              <input
                type="text"
                value={profiledata.university}
                id="university"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Region */}
            <div className="mb-4">
              <label
                htmlFor="region"
                className="block mb-2 text-sm sm:text-base lg:text-lg">
                Region
              </label>
              <select
                id="region"
                value={profiledata.region}
                onChange={handleSelectChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                {/* Add a placeholder option */}
                <option value="" disabled>
                  Select a region
                </option>
                {countries.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            {/* City */}
            <div className="mb-4">
              <label
                htmlFor="city"
                className="block mb-2 text-sm sm:text-base lg:text-lg">
                City
              </label>
              <select
                id="city"
                value={profiledata.city}
                onChange={handleSelectChange}
                className="w-full p-2 border border-gray-300 rounded-md">
                <option value="">Select City</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Kolkata">Kolkata</option>
              </select>
            </div>

            {/* Website URL */}
            <div className="mb-4">
              <label
                htmlFor="website"
                className="block mb-2 text-sm sm:text-base lg:text-lg">
                Website URL
              </label>
              <input
                type="text"
                value={
                  profiledata.portfoliolinks
                }
                id="portfoliolinks"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            {/* Description */}
            <div className="mb-6">
              <label
                htmlFor="description"
                className="block mb-2 text-sm sm:text-base lg:text-lg">
                Description
              </label>
              <textarea
                id="description"
                value={profiledata.description}
                onChange={handleChange}
                placeholder="Write a brief description about yourself"
                className="w-full p-2 border border-gray-300 rounded-md h-32"></textarea>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">
                Skills
              </h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <select
                  id="skills"
                  value={profiledata.skills}
                  onChange={(e) =>
                    setProfiledata((prev) => ({
                      ...prev,
                      currentSkill: e.target.value,
                    }))
                  }
                  className="w-[80%] h-10 rounded-lg border border-gray-400">
                  <option value="">Select Skill</option>
                  <option value="Video Editor">Video Editor</option>
                  <option value="Photo Editor">Photo Editor</option>
                  <option value="Canva Expert">Canva Expert</option>
                  <option value="Invitation Card">Invitation Card</option>
                  <option value="Web Developer">Web Developer</option>
                  <option value="UI/UX Designer">UI/UX Designer</option>
                  <option value="Mockups">Mockups</option>
                  <option value="Graphic Designer">Graphic Designer</option>
                </select>

                <button
                  type="button"
                  onClick={() => {
                    if (profiledata.currentSkill) {
                      setProfiledata((prev) => ({
                        ...prev,
                        skills: [...prev.skills, prev.currentSkill],
                        currentSkill: "", // Clear the selected skill
                      }));
                    }
                  }}
                  className="text-white bg-maincolor px-4 rounded-lg">
                  ADD
                </button>
              </div>

              {/* Display Added Skills */}
              <div className="flex flex-wrap gap-2">
                {profiledata.skills.length > 0 ? (
                  profiledata.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-800 px-3 py-1 rounded-lg text-sm">
                      {skill}
                      <button
                        type="button"
                        onClick={() =>
                          setProfiledata((prev) => ({
                            ...prev,
                            skills: prev.skills.filter((_, i) => i !== index),
                          }))
                        }
                        className="ml-2 text-red-600 font-bold">
                        &times;
                      </button>
                    </span>
                  ))
                ) : (
                  <p className="text-gray-500">No skills added yet.</p>
                )}
                {/* {item.skills} */}
              </div>
            </div>

            {/* Languages */}
            <div className="flex flex-col sm:flex-row justify-between my-4">
              <div>
                <h1 className="text-lg sm:text-2xl">Language</h1>
                <div className="mt-4">
                  <h2 className="text-lg">Added Languages</h2>
                  <ul className="list-disc pl-5">
                    {profiledata.languages.length > 0 ? (
                      profiledata.languages.map((lang, index) => (
                        <li key={index} className="text-sm">
                          {lang.language} - {lang.proficiency}
                        </li>
                      ))
                    ) : (
                      <p className="text-gray-500">No languages added yet.</p>
                    )}
                  </ul>
                </div>          </div>
              <div className="sm:w-1/2 flex flex-col sm:flex-row gap-2 sm:gap-3">
                <select
                  name="languages"
                  className="w-full h-10 sm:w-1/3 px-1 py-1 border border-black rounded-md"
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                >
                  <option value="">Select Language</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Urdu">Urdu</option>
                </select>
                <select
                  value={selectedProficiency}
                  onChange={(e) => setSelectedProficiency(e.target.value)}
                  className="w-full h-10 sm:w-1/3 px-1 py-1 border border-black rounded-md"
                >
                  <option value="">Select Proficiency</option>
                  <option value="Basic">Basic</option>
                  <option value="Conversational">Conversational</option>
                  <option value="Fluent">Fluent</option>
                  <option value="Native/Bilingual">Native/Bilingual</option>
                </select>


                <button
                  className="w-full h-10 sm:w-auto text-white py-1 bg-green-600 rounded-md px-6 text-lg"
                  onClick={handleAddLanguage}
                >
                  <b>Add</b>
                </button>

              </div>

            </div>

            {/* Phone Number */}
            <div className="mb-6">
              <label
                htmlFor="contact"
                className="block mb-2 text-sm sm:text-base lg:text-lg">
                Phone Number
              </label>
              <input
                type="text"
                id="contact"
                value={profiledata.contact}
                onChange={handleChange}
                placeholder="+91"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm sm:text-base lg:text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={profiledata.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="bg-maincolor text-white px-5 py-2 rounded-lg mt-3 mb-14">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Freelancer1;



// Do console.log(imageUrl ) for print the img url 

