import {     
    productReadAllService,
    ProductReadService,
    productAddService,
    productUpdateService,
    productDeleteService
} from '../service'

const ProductReadAll = async (req, res, next) => {
    try {
        const items = await productReadAllService(req, res, next);
        res.status(200).send(items);
    } catch (e) {
        res.status(500).send(e.message);
    }
};

const ProductReadOne = async (req, res, next) => {
    try {
        const items = await ProductReadService(req, res, next);
        res.status(200).send(items);
    } catch (e) {
        res.status(500).send(e.message);
    }
};

const ProductAddOne = async (req, res, next) => {
    try {
        const items = await productAddService(req, res, next);
        res.status(200).send(items);
    } catch (e) {
        res.status(500).send(e.message);
    }
};

const ProductUpdateOne = async (req, res, next) => {
    try {
        const items = await productUpdateService(req, res, next);
        res.status(200).send(items);
    } catch (e) {
        res.status(500).send(e.message);
    }
};

const ProductDeleteOne = async (req, res, next) => {
    try {
        const items = await productDeleteService(req, res, next);
        res.status(200).send(items);
    } catch (e) {
        res.status(500).send(e.message);
    }
};

export {
    ProductReadAll,
    ProductReadOne,
    ProductAddOne,
    ProductUpdateOne,
    ProductDeleteOne
};