const app=require("./server.js");
const dao=require("./dao.js");
const dotenv=require("dotenv");
const mongodb=require("mongodb");

async function main(){

    dotenv.config({path: __dirname + "/credenziali.env"});
    console.log(process.env.DB_URI);
    const client=new mongodb.MongoClient(process.env.DB_URI);
    const port=process.env.PORT || 10000;

    try{
        await client.connect();
        await dao.injectDb(client);
        app.listen(port,()=>{console.log("connecterd to db! app listen on port --> "+port)});
    }
    catch(e){
        console.log("unable to connect in index.js to db, error: "+e);
    }

}

main().catch(console.error);