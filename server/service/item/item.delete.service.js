import db from '../../database/models';
import { Op } from "sequelize";

const itemDeleteService = async (req, res, next) => {
    // /*
    //  * Update the IsDeleted field
    //  */
    // const collection = await db.CollectionItems.update({
    //     IsDeleted: 1,
    //     where: { 
    //         ItemId: {
    //             [Op.eq]: parseInt(req.params.id, 10)
    //         }
    //     }
    // });

    // return collection;

    
    /*
     * Row drop from the table
     * @params ItemId
     */
    const collection = await db.CollectionItems.destroy({
        where: {
            ItemId: {
                [Op.eq]: parseInt(req.params.id, 10)
            }
        }
    });

    if( collection == 1 ){
        return {
            ItemId: req.params.id,
            IsDeleted: true,
            Msg: ''
        };
    }else {
        return {
            ItemId: req.params.id,
            IsDeleted: false,
            Msg: 'Can not find'
        };
    }
};

export default itemDeleteService; 