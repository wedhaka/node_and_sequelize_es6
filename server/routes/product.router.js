import express from 'express';
import { 
  ProductReadAll,
  ProductReadOne,
  ProductAddOne,
  ProductUpdateOne,
  ProductDeleteOne
} from '../controller/product.controller';

/*
 * Route Call Here
 */
const router = express.Router();

/* 
 * GET Products Listing.
 */
router.get('/', ProductReadAll);

/* 
 * GET Products Read One.
 */
router.get('/:id', ProductReadOne);

/* 
 * GET Products Add To List.
 */
router.post('/', ProductAddOne);

/* 
 * GET Product Update.
 */
router.put('/:id', ProductUpdateOne);

/* 
 * GET Products Delete.
 */
router.delete('/:id', ProductDeleteOne);

export default router;