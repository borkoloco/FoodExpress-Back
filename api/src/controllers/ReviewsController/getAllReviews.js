const { Review, Status } = require("../../db");

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      include: {
        model: Status,
        as: "reviewStatus",
        attributes: ["statusDescription"],
      },
    });

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({
      error: "No se pudieron obtener las reviews",
      error: error.message,
    });
  }
};

module.exports = getAllReviews;

// const { Review } = require("../../db");

// const getAllReviews = async (req, res) => {
//   try {
//     const reviews = await Review.findAll();
//     res.json(reviews);
//   } catch (error) {
//     res.status(500).json({ error: "No se pudieron obtener las reviews" });
//   }
// };

// module.exports = getAllReviews;
