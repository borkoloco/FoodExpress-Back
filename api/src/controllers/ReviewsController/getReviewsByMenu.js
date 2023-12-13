const { Review } = require("../../db");

const getReviewsByMenu = async (req, res) => {
  const { idMenu } = req.params;

  try {
    const menuReviews = await Review.findAll({
      where: { idMenu: idMenu },
      order: [["date", "DESC"]],
    });

    if (!menuReviews || menuReviews.length === 0) {
      return res.status(200).json([]);
      // return res
      //   .status(404)
      //   .json({ error: "No se encontraron reviews para este menú" });
    }

    res.status(200).json(menuReviews);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las reviews del menú" });
  }
};

module.exports = getReviewsByMenu;
