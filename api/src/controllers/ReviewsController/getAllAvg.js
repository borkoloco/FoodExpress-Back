const { Review, Menu } = require("../../db");

const getAllAvg = async (req, res) => {
  try {
    const menus = await Menu.findAll();

    const promediosArray = [];

    for (const menu of menus) {
      const reviews = await Review.findAll({
        where: {
          idMenu: menu.idMenu,
        },
      });

      let totalRates = 0;
      let cantidadReviews = 0;

      for (const review of reviews) {
        if (review.rate) {
          totalRates += review.rate;
          cantidadReviews++;
        }
      }

      const promedio = cantidadReviews > 0 ? totalRates / cantidadReviews : 0;

      if (!reviews || reviews.length === 0) {
        promediosArray.push({
          idMenu: menu.idMenu,
          promedioRate: 0,
        });
      } else {
        promediosArray.push({
          idMenu: menu.idMenu,
          promedioRate: promedio,
        });
      }
    }

    return res.status(200).json({ promedios: promediosArray });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error:
        "Ocurrió un error al calcular los promedios de rates para los menús.",
    });
  }
};

module.exports = getAllAvg;

// const { Review, Menu } = require("../../db");

// const getAllAvg = async (req, res) => {
//   try {
//     const menus = await Menu.findAll();

//     const promediosArray = [];

//     for (const menu of menus) {
//       const reviews = await Review.findAll({
//         where: {
//           idMenu: menu.id,
//         },
//       });

//       let totalRates = 0;
//       let cantidadReviews = 0;

//       for (const review of reviews) {
//         if (review.rate) {
//           totalRates += review.rate;
//           cantidadReviews++;
//         }
//       }

//       const promedio = cantidadReviews > 0 ? totalRates / cantidadReviews : 0;

//       promediosArray.push({
//         id: menu.id,
//         promedioRate: promedio,
//       });
//     }

//     return res.status(200).json({ promedios: promediosArray });
//   } catch (error) {
//     console.error(error);
//     return res
//       .status(500)
//       .json({
//         error:
//           "Ocurrió un error al calcular los promedios de rates para los menús.",
//       });
//   }
// };

// module.exports = getAllAvg;
