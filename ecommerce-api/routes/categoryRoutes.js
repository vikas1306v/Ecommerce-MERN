const express=require("express");

const Category=require("../modals/Category");
const validateToken=require("../middlewares/tokenValidaton");

const router=express.Router();



//only admin can create category
router.post("/create",validateToken,async (req,res)=>{
    const {title}=req.body;
    const user_role=req.user_role;
    try{
        if(user_role!="admin")
        {
            return  res.status(404).json({
                success:false,
                message:"Only admin can create category"
            })
        }
        const category=await Category.create({
            title:title
        
        })
        return res.status(200).json({
            success:true,
            message:"Category created successfully",
            category:category
        })
     
    }
    catch(e)
    {
        return  res.status(404).json({
            success:false,
            error:e,
            message:"Internal Server Error"
        })
    }

})

//update category only admin can update category
router.put("/update/:id",validateToken,async (req,res)=>{
    const {title}=req.body;
    const user_role=req.user_role;
    try{
        if(user_role!="admin")
        {
            return  res.status(404).json({
                success:false,
                message:"Only admin can update category"
            })
        }
        const category=await Category.findByIdAndUpdate(req.params.id,{
            title:title
        })
        return res.status(200).json({
            success:true,
            message:"Category updated successfully",
            category:category
        })
    }
    catch(e)
    {
        return  res.status(404).json({
            success:false,
            error:e,
            message:"Internal Server Error"
        })
    }

})
//get all categories
router.get("/all",validateToken,async (req,res)=>{

    if(req.user_role!="admin")
    {
        return  res.status(404).json({
            success:false,
            message:"Only admin can get all categories"
        })
    }
    try{
        const categories=await Category.find({});
        return res.status(200).json({
            success:true,
            message:"All categories",
            categories:categories
        })
    }
    catch(e)
    {
        return  res.status(404).json({
            success:false,
            error:e,
            message:"Internal Server Error"
        })
    }

})
//GET category by id
router.get("/:id",validateToken,async (req,res)=>{
    if(req.user_role!="admin")
    {
        return  res.status(404).json({
            success:false,
            message:"Only admin can get category by id"
        })
    }
    try{
        const category=await Category.findById(req.params.id);
        return res.status(200).json({
            success:true,
            message:"Category",
            category:category
        })
    }
    catch(e)
    {
        return  res.status(404).json({
            success:false,
            error:e,
            message:"Internal Server Error"
        })
    }

})
module.exports=router;