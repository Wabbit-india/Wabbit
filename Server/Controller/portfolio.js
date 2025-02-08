import PortfolioSchema from "../Schema/PortfolioSchema.js";

export const profiledata = async (req, res) => {
  try {
    const { userId, title, projectCategorise, portfolio } = req.body;

    console.log("Received userId:", userId);

    // Validate required fields
    if (!title || !projectCategorise || !portfolio) {
      return res.status(400).json({ error: "Required fields are missing." });
    }

    // Check if portfolio already exists for the given userId
    let portfoliodata = await PortfolioSchema.findOne({ userId });

    if (portfoliodata) {
      // Update only the fields that are provided
      portfoliodata.title = title || portfoliodata.title;
      portfoliodata.projectCategorise = projectCategorise || portfoliodata.projectCategorise;
      portfoliodata.portfolio = portfolio || portfoliodata.portfolio;

      // Save the updated portfolio
      await portfoliodata.save();

      return res.status(200).json({
        message: "Profile updated successfully",
        profile: portfoliodata,
      });
    }

    // Create and save a new profile if it doesn't exist
    const newProfile = new PortfolioSchema({
      userId,
      title,
      projectCategorise,
      portfolio,
    });

    const savedProfile = await newProfile.save();

    return res.status(201).json({
      message: "Profile created successfully",
      profile_id: savedProfile._id,
      profile: savedProfile,
    });
  } catch (error) {
    console.error("Internal server error at profile data controller 🔴:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default profiledata;
