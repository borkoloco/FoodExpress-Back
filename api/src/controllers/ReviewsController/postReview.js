const { Review, User, Menu } = require("../../db");

const addReview = async (req, res) => {
  const { idUser, idMenu, rate, comment } = req.body;

  try {
    const [user, menu] = await Promise.all([
      User.findByPk(idUser),
      Menu.findByPk(idMenu),
    ]);

    if (!user || !menu) {
      return res.status(404).json({ error: "El usuario o el menú no existen" });
    }

    const existingReview = await Review.findOne({
      where: { idUser: idUser, idMenu: idMenu },
    });

    if (existingReview) {
      return res
        .status(400)
        .json({ error: "Ya existe un review para este usuario y menú" });
    }

    const newReview = await Review.create({
      idUser: idUser,
      idMenu: idMenu,
      rate: rate,
      comment: comment,
      idStatus: 1,
    });

    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ error: "No se pudo crear el review" });
  }
};

module.exports = addReview;
