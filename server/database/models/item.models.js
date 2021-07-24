import { Model } from 'sequelize';

/*
 * @params Sequelize
 * @params Datatypes
 * Init collection of Properties
 */
module.exports = (sequelize, DataTypes) => {

    class CollectionItems extends Model {};
    
    CollectionItems.init({
        ItemId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        ItemName: {
            type: DataTypes.STRING
        },
        IsDeleted: {
            type: DataTypes.BOOLEAN
        },
        IsActive: {
            type: DataTypes.BOOLEAN
        },
    },{
        sequelize,
        createdAt: false,
        updatedAt: false,
        tableName: 'items_tb',
        modelName: 'CollectionItems'
    });

    return CollectionItems;
};