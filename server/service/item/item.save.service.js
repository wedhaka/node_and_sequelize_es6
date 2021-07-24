import db from '../../database/models';

const itemAddService = async (req, res, next) => {
    const collection = await db.CollectionItems.create({
        ItemId: req.query.ItemId,
        ItemName: req.query.ItemName,
        IsDeleted: req.query.IsDeleted,
        IsActive: req.query.IsActive
    });
    return collection;
};

export default itemAddService; 