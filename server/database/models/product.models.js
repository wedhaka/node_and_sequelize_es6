import { Model, Sequelize } from 'sequelize';

module.exports = (sequelize, DataTypes) => {

    class CollectionProducts extends Model {};
    
    CollectionProducts.init({
        VariantProductId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        ProductId: {
            type: DataTypes.INTEGER
        },
        CategoryId: {
            type: DataTypes.INTEGER
        },
        SubCategoryId: {
            type: DataTypes.INTEGER
        },
        Price: {
            type: DataTypes.STRING
        },
        SizeId: {
            type: DataTypes.INTEGER
        },
        Rating: {
            type: DataTypes.FLOAT
        },
        ReviewId: {
            type: DataTypes.INTEGER
        },
        WearId: {
            type: DataTypes.INTEGER
        },
        Quantity: {
            type: DataTypes.NUMBER
        },
        IsDelete: {
            type: DataTypes.BOOLEAN
        }
    },{
        sequelize,
        createdAt: false,
        updatedAt: false,
        tableName: 'collection_variant_product',
        modelName: 'CollectionProducts'
    });

    return CollectionProducts;
};