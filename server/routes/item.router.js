import express from 'express';
import { 
  ItemReadAll,
  ItemReadOne,
  ItemAddOne,
  ItemUpdateOne,
  ItemDeleteOne
} from '../controller/item.controller';

/*
 * Route Call Here
 */
const router = express.Router();

/* 
 * GET Products Listing.
 */
router.get('/', ItemReadAll);

/* 
 * GET Products Read One.
 */
router.get('/:id', ItemReadOne);

/* 
 * GET Products Add To List.
 */
router.post('/', ItemAddOne);

/* 
 * GET Product Update.
 */
router.put('/:id', ItemUpdateOne);

/* 
 * GET Products Delete.
 */
router.delete('/:id', ItemDeleteOne);

export default router;