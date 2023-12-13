const { Review } = require("../../db");

const getReviewsByUser = async (req, res) => {
  const { idUser } = req.params;

  try {
    const userReviews = await Review.findAll({ where: { idUser: idUser } });

    if (!userReviews || userReviews.length === 0) {
      return res.status(200).json([]);
    }

    res.status(200).json(userReviews);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las reviews del usuario" });
  }
};

module.exports = getReviewsByUser;
