import ProfileSchema from "../Schema/ProfileSchema.js";
export const profiledata = async (req, res) => {
  try {
      const {
          userId,
          firstname,
          lastname,
          occuption,  
          university,
          region,
          city,
          portfoliolinks,
          description,
          languages,
          skills,
          contact,
          email,
      } = req.body;

      console.log("Received userId:", userId);

      // Validate required fields
      if (!firstname || !lastname || !description) {
          return res.status(400).json({ error: "Required fields are missing." });
      }

      // Check if profile already exists for the given userId
      let profile = await ProfileSchema.findOne({ userId });

      if (profile) {
          // Update existing profile
          profile.firstname = firstname;
          profile.lastname = lastname;
          profile.occuption = occuption;
          profile.university = university;
          profile.region = region;
          profile.city = city;
          profile.portfoliolinks = portfoliolinks;
          profile.description = description;
          profile.languages = languages;
          profile.skills = skills;
          profile.contact = contact;
          profile.email = email;

          await profile.save();

          return res.status(200).json({
              message: "Profile updated successfully",
              profile_id: profile._id, // Return the profile ID
              profile,
          });
      }

      // Create and save the new profile if it doesn't exist
      const newProfile = new ProfileSchema({
          userId,
          firstname,
          lastname,
          occuption,
          university,
          region,
          city,
          portfoliolinks,
          description,
          languages,
          skills,
          contact,
          email,
      });

      const savedProfile = await newProfile.save();

      return res.status(201).json({
          message: "Profile created successfully",
          profile_id: savedProfile._id, // Return the new profile ID
          profile: savedProfile,
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
    const { userId, id, skills } = req.query; // Retrieve 'userId', 'id', and 'skillswork' from query params

    let profiles;

    if (id) {
      // Fetch a specific profile by ID
      profiles = await ProfileSchema.findById(id);

      if (!profiles) {
        return res.status(404).json({ error: "Profile not found" });
      }
    } else if (userId) {
      // Fetch a specific profile by userId
      profiles = await ProfileSchema.findOne({ userId });

      if (!profiles) {
        return res.status(404).json({ error: "Profile not found for the given userId" });
      }
    } else if (skills) {
      // Fetch profiles where 'skillswork' matches (case-insensitive)
      profiles = await ProfileSchema.find({
        skills: { $regex: skills, $options: "i" },
      });
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
