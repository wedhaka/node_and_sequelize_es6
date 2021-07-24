import db from '../database/models';

const productReadAllService = async (req, res, next) => {
    const collection = await db.CollectionProducts.findAll({
        limit: 1000,
    });
    return collection;
};

const ProductReadService = async (req, res, next) => {
    const collection = await db.CollectionProducts.findOne({ 
        where: { 
            VariantProductId: parseInt(req.params.id, 10) 
        },        
        limit: 1,
    });
    return collection;
};

const productAddService = async (req, res, next) => {
    const collection = await db.CollectionProducts.create({

    });
    return collection;
};

const productUpdateService = async (req, res, next) => {
    const collection = await db.CollectionProducts.findOrCreate({
        where: { VariantProductId: parseInt(req.params.id, 10) }
    });
    return collection;
};

const productDeleteService = async (req, res, next) => {
    const collection = await db.CollectionProducts.findAll({
        where: { VariantProductId: parseInt(req.params.id, 10) }
    });;
    return collection;
};
  
export {
    productReadAllService,
    ProductReadService,
    productAddService,
    productUpdateService,
    productDeleteService
};