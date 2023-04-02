import dbConnect from "@/util/mongo";
import Product from "@/models/Product";
import {tryParsePattern} from "next/dist/build/webpack/plugins/jsconfig-paths-plugin";

export default async function handler(req, res) {
    const {method, query: {id}} = req;
    await dbConnect();
    switch(method){
        case 'GET':
            try{
                const product = await Product.findById(id);
                res.status(200).json(product);
            }
            catch(err){
                res.status(500).json({error: err});
            }
            break;
        case 'POST':
            try{
                const product = await Product.create(req.body);
                res.status(201).json(product);
            }
            catch(err){
                res.status(500).json({error: err});
            }
            break;
        case 'PUT':
            break;
        case 'DELETE':
            break;
        default:
            res.status(400).json({message: "Bad request!"})
    }
}
