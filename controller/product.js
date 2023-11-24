
const Products = require("../model/product")

const getAllProducts = async (req,res)=>{
    const {page,limit} = req.query;
    let endpoint = Products.find({})
    if(page){
        let pagePag = Number(page) || 1
        let limitPag = Number(limit) || 3
        let skip = (pagePag - 1) * limitPag;
        endpoint = endpoint.skip(skip).limit(limitPag);
    }


    const allProduct = await endpoint 
    res.status(200).json({allProduct})
}

const getAllTesting = async (req,res)=>{
    const {company,name,sort,select,} = req.query;
    const queryItems  = {};


    if(company){
        queryItems.company = {$regex: company,$options:"i"}
    }
    if(name){
        queryItems.name = {$regex:name ,$options:"i"}
    }

    let endpoint = Products.find(queryItems)
    if(sort){
        let sortFix = sort.replace(","," ")
        endpoint = endpoint.sort(sortFix)
    }

    if(select){
        let selectFix = select.split(",").join(" ");
        endpoint = endpoint.select(selectFix)
    }
    const allProduct = await endpoint;
    res.status(200).json({allProduct})
}

module.exports = {getAllProducts,getAllTesting};