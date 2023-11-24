const { Sequelize, Op } = require("sequelize");
const { Menu, Especialidad, Tipo } = require("../db");

const getMenusByQuery = async (name) => {
    try {
        
        const menus = await Menu.findAll({
            where: {
                // Utiliza la condición LIKE para buscar por nombre parcial
                nameMenu: {
                    [Op.iLike]: `%${name}%`
                }
            },
            include: [
                {
                    model: Tipo,
                    attributes: ['nameTipo'],
                    as: 'typeMenu',
                },
                {
                    model: Especialidad,
                    attributes: ['NameEspecialidad'],
                    as: 'specialtyMenu',
                },
            ],
        });
        console.log(menus)

        return menus;
    } catch (error) {
        throw new Error(`Error al obtener menús: ${error.message}`);
    }
};

const getMenusByQueryHandler = (req, res) => {
    const { name } = req.query;

    // Manejo de la promesa directamente
    getMenusByQuery(name)
        .then((menus) => {
            if (menus.length === 0) {
                // Envía un mensaje si no se encontraron menús
                res.status(404).json({ message: 'No se encontraron menús con el nombre proporcionado.' });
            } else {
                // Envía los menús encontrados como respuesta
                res.status(200).json(menus);
            }
        })
        .catch((error) => {
            // Manejo de errores y envío de respuesta con código 500 en caso de error
            res.status(500).json({ error: error.message });
        });
};

module.exports = getMenusByQueryHandler;