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
