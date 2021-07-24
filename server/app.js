import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

/*
 * Routers
 */
import indexRouter from './routes/index.router';
import productsRouter from './routes/product.router';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/products', productsRouter);


export default app;