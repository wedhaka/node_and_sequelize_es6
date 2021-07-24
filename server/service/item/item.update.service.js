import db from '../../database/models';

const itemUpdateService = async (req, res, next) => {
    const collection = await db.CollectionItems.update({
        ItemName: req.query.ItemName,
        where: { ItemId: parseInt(req.query.ItemId, 10) }
    });
    return collection;
};

export default itemUpdateService;  