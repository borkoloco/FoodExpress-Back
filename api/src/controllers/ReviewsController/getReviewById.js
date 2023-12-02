const { Review } = require("../../db");

const getReviewById = async (req, res) => {
  const { id } = req.params;

  try {
    const review = await Review.findByPk(id);

    if (!review) {
      return res.status(404).json({ error: "Review no encontrado" });
    }

    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el review" });
  }
};

module.exports = getReviewById;
