import dbConnect from "@/util/mongo";
import Product from "@/models/Product";


export default async function handler(req, res) {
    const {method} = req;
    await dbConnect();
    switch(method){
        case 'GET':
            try{
                const product = await Product.find();
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
        default:
            res.status(400).json({message: "Bad request!"})
    }
}
