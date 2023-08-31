let users_data;
class dao{
    static async injectDb(client){
        if(users_data)
            return;
        try{
            users_data= await client.db(process.env.DB_NAME).collection('users_data');
        }
        catch(e){
            console.log(e);
            console.log("unable to injectDb in dao.js");
        }
    }

    static async get(limit=20,nskip=0){
        try{
            let cursor = await users_data.find().limit(limit).skip(nskip);
            const results=cursor.toArray();
            return results;
        }
        catch(e){
            console.error("unable to execute get commands in dao.js error: "+e);
            return [];
        } 
    }
}

module.exports=dao;