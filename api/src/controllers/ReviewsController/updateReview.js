const { Review } = require("../../db"); // Reemplaza './models' con la ruta correcta a tu modelo de Review

const updateReviewById = async (req, res) => {
  const { id } = req.params;
  const { rate, comment, idStatus } = req.body;

  try {
    const reviewToUpdate = await Review.findByPk(id);

    if (!reviewToUpdate) {
      return res.status(404).json({ error: "Review no encontrada" });
    }

    reviewToUpdate.rate = rate;
    reviewToUpdate.comment = comment;
    reviewToUpdate.idStatus = idStatus;

    await reviewToUpdate.save();

    res.status(200).json(reviewToUpdate);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la review" });
  }
};

module.exports = updateReviewById;
