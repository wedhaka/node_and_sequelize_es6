import db from '../../database/models';

const itemReadAllService = async (req, res, next) => {
    const collection = await db.CollectionItems.findAll({
        limit: 1000,
    });
    return collection;
};

export default itemReadAllService;