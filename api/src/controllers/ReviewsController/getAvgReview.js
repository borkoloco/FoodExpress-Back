const { Review } = require("../../db");

const getAvgReview = async (req, res) => {
  const { id } = req.params;

  try {
    const reviews = await Review.findAll({
      where: {
        idMenu: id,
      },
    });

    if (!reviews) {
      return res.status(404).json({
        error: "No se encontraron reviews para el menú especificado.",
      });
    }

    let totalRates = 0;
    let cantidadReviews = 0;

    for (const review of reviews) {
      if (review.rate) {
        totalRates += review.rate;
        cantidadReviews++;
      }
    }
    const promedio = totalRates / cantidadReviews;

    return res.status(200).json({ promedioRates: promedio });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Ocurrió un error al calcular el promedio de rates." });
  }
};

module.exports = getAvgReview;
