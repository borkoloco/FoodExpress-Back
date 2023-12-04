const { Review } = require("../../db");

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: "No se pudieron obtener las reviews" });
  }
};

module.exports = getAllReviews;
