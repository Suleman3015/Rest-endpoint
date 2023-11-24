const mongoose = require("mongoose");
const Products = require("../model/product")

const getAllProducts = async (req,res)=>{
    let page = Number(req.query.page) || 2
    let limit = Number(req.query.limit) || 3
    let skip = (page - 1) * limit;





    const allProduct = await Products.find({}).skip(skip).limit(limit);
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