const dao=require('./dao.js');


class dataController{

    static async get(req,res,next){
        const nlimit=req.query.limit? Number(req.query.limit) : 20;
        const nskip=req.query.skip? Number(req.query.skip) : 0;

        const results=await dao.get(nlimit,nskip);

        res.json({users_data:results});
    }


}

module.exports=dataController;