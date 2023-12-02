const { Review } = require("../../db");

const deleteReviewById = async (req, res) => {
  const { id } = req.params;
  try {
    const reviewToDelete = await Review.findByPk(id);

    if (!reviewToDelete) {
      return res.status(404).json({ error: "Review no encontrada" });
    }

    await reviewToDelete.destroy();

    res.status(200).json({ message: "Review eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la review" });
  }
};

module.exports = deleteReviewById;
