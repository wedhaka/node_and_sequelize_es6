import {     
    itemReadAllService,
    itemReadService,
    itemAddService,
    itemUpdateService,
    itemDeleteService
} from '../service'

const ItemReadAll = async (req, res, next) => {
    try {
        const items = await itemReadAllService(req, res, next);
        res.status(200).send(items);
    } catch (e) {
        res.status(500).send(e.message);
    }
};

const ItemReadOne = async (req, res, next) => {
    try {
        const items = await itemReadService(req, res, next);
        res.status(200).send(items);
    } catch (e) {
        res.status(500).send(e.message);
    }
};

const ItemAddOne = async (req, res, next) => {
    try {
        const items = await itemAddService(req, res, next);
        res.status(200).send(items);
    } catch (e) {
        res.status(500).send(e.message);
    }
};

const ItemUpdateOne = async (req, res, next) => {
    try {
        const items = await itemUpdateService(req, res, next);
        res.status(200).send(items);
    } catch (e) {
        res.status(500).send(e.message);
    }
};

const ItemDeleteOne = async (req, res, next) => {
    try {
        const items = await itemDeleteService(req, res, next);
        res.status(200).send(items);
    } catch (e) {
        res.status(500).send(e.message);
    }
};

export {
    ItemReadAll,
    ItemReadOne,
    ItemAddOne,
    ItemUpdateOne,
    ItemDeleteOne
};