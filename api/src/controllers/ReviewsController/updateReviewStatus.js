const { Review } = require("../../db");

const updateReviewStatus = async (req, res) => {
  const { id } = req.params;
  const { idStatus } = req.body;

  try {
    const reviewToUpdate = await Review.findByPk(id);

    if (!reviewToUpdate) {
      return res.status(404).json({ error: "Review no encontrada" });
    }

    reviewToUpdate.idStatus = idStatus;

    await reviewToUpdate.save();

    res.status(200).json(reviewToUpdate);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al actualizar el estado de la review" });
  }
};

module.exports = updateReviewStatus;
