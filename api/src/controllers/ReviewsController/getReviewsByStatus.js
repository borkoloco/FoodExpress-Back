const { Review } = require("../../db");

const getReviewsByStatus = async (req, res) => {
  const { idStatus } = req.params;

  try {
    const reviews = await Review.findAll({
      where: {
        idStatus: idStatus,
      },
    });

    if (reviews.length === 0) {
      return res
        .status(404)
        .json({ message: "No se encontraron reviews con ese status" });
    }

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: "No se pudieron obtener las reviews" });
  }
};

module.exports = getReviewsByStatus;
