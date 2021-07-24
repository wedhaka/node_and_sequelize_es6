import db from '../../database/models';

const itemReadService = async (req, res, next) => {
    const collection = await db.CollectionItems.findOne({ 
        where: { 
            ItemId: parseInt(req.params.id, 10) 
        },        
        limit: 1,
    });
    return collection;
};

export default itemReadService;  