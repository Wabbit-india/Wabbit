import ProfileSchema from "../Schema/ProfileSchema.js";
export  const profiledata = async (req, res) => {
    try {
        const {
            firstname,
            lastname,
            description,
            // profilePicture,
            region,
            city,
            languages,
            skills,
            occuption,
            fromdate,
            todate,
            skillschoose,
            skillswork,
            portfoliolinks,
            university,
        } = req.body;

        // Validate required fields
        if (!firstname || !lastname || !description) {
            return res.status(400).json({ error: "Required fields are missing." });
        }

        // Create and save the new profile
        const newProfile = new ProfileSchema({
            firstname,
            lastname,
            // profilePicture: [profilePicture], // Ensure it's an array
            description,
            region,
            city,
            languages,
            skills,
            occuption,
            fromdate,
            todate,
            skillschoose,
            skillswork,
            portfoliolinks,
            university,
          });
          
        await newProfile.save();

        // Send a success response
        res.status(200).send({
            message: "Profile data successfully saved",
        });
    } catch (error) {
        console.error("Internal server error at profile data controller 🔴:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
export default profiledata;

//fetch data
// Fetch profile data
export const getprofile = async (req, res) => {
    try {
      const { id, skillswork } = req.query; // Retrieve 'skillswork' from query params
  
      let profiles;
  
      if (id) {
        // Fetch a specific profile by ID
        profiles = await ProfileSchema.findById(id);
  
        if (!profiles) {
          return res.status(404).json({ error: "Profile not found" });
        }
      } else if (skillswork) {
        // Fetch profiles where 'skillswork' matches
        profiles = await ProfileSchema.find({ skillswork: { $regex: skillswork, $options: "i" } }); // Case-insensitive match
      } else {
        // Fetch all profiles
        profiles = await ProfileSchema.find();
      }
  
      // Send the fetched data
      res.status(200).json({ data: profiles });
    } catch (error) {
      console.error("Internal server error at get profile data controller 🔴:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  