const router=require('express').Router();
const Product=require('../modals/Product');
const validateToken=require('../middlewares/tokenValidaton');
const Category=require('../modals/Category')


//create product only admin can create product
router.post("/create/:categoryId",validateToken,async (req,res)=>{
    const {title,description,price,discount,brand,stock,sold,color,
    images}=req.body;
    const user_role=req.user_role;
    console.log(user_role)
    try{
        if(user_role!="admin")
        {
            return  res.status(404).json({
                success:false,
                message:"Only admin can create product"
            })
        }
        
        const categoryId=req.params.categoryId;
        const category=await  Category.findById(categoryId);
        const categoryName=category.title;
        const product=await Product.create({
            title:title,
            description:description,
            price:price,
            discount:discount,
            brand:brand,
            category:categoryId,
            stock:stock,
            images:images,
            sold:sold,
            color:color,
            categoryName:categoryName
        })
        return res.status(200).json({
            success:true,
            message:"Product created successfully",
            product:product
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

//get all product by category id
router.get("/getByCategory/:categoryId",async (req,res)=>{
    const categoryId=req.params.categoryId;
    try{
        const products=await Product.find({category:categoryId});
        return res.status(200).json({
            success:true,
            message:"Product fetched successfully",
            products:products
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

//get all products
router.get("/all",async (req,res)=>{
    try{
        const products=await Product.find({});
        return res.status(200).json({
            success:true,
            message:"Product fetched successfully",
            products:products
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

//filter products by price and category
router.post("/filter",async (req,res)=>{
    const {category,price}=req.body;
    try{
        const products=await Product.find({category:category,price:{$lte:price}});
        return res.status(200).json({
            success:true,
            message:"Product fetched successfully",
            products:products
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


//sort on basis of new arivals 
router.get("/newArrivals",async (req,res)=>{
    try{
        const products=await Product.find({}).sort({createdAt:-1}).limit(10);
        return res.status(200).json({
            success:true,
            message:"Product fetched successfully",
            products:products
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

//sort on basis of best ratings
router.get("/bestRatings",async (req,res)=>{
    try{
        const products=await Product.find({}).sort({
            ratings:-1
        }).limit(10);
        return res.status(200).json({
            success:true,
            message:"Product fetched successfully",
            products:products
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
//sort price low to high
router.get("/priceLtoH",async (req,res)=>{
    try{
        const products=await Product.find({}).sort({
            price:1
        });
        return res.status(200).json({
            success:true,
            message:"Product fetched successfully",
            products:products
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

//sort price high to low
router.get("/priceHtoL",async (req,res)=>{
    try{
        const products=await Product.find({}).sort({
            price:-1
        });
        return res.status(200).json({
            success:true,
            message:"Product fetched successfully",
            products:products
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

//adding rating to a product
router.post('/postRating/:product_id',validateToken,async (req,res)=>{
    const id=req.user_id;
    const role=req.user_role;
    const {product_id}=req.params;
    const {star,comment}=req.body;
    try{
        if(role!='user')
        {
            return res.json({
                success:false,
                message:'You are not authorized'
            })
        }
        let product=await Product.findByIdAndUpdate(product_id,{
            $push:{ratings:{star:star,comment:comment,postedby:id}},
        },{
            new:true
        });
        const sum=product.ratings.reduce((acc,item)=>{return acc+item.star},0)
        const averageRating=sum/product.ratings.length; 
        product= await Product.findByIdAndUpdate(product_id,{
            $set:{averageRating:averageRating}
        },{
            new:true
        })
        
        return res.json({
            success:true,
            message:'Rating added successfully',
            product:product
        })
    }
    catch(e)
    {
        return res.json(
            {
                success:false,
                error:e,
                message:'Internal Server Error'
            }
            )


    }

})

//find all products of a particular category  id
router.get('/getByCategory/:categoryId',async (req,res)=>{
    const {categoryId}=req.params;
    try{
        const products=await Product.find({category:categoryId});
        return res.json({
            success:true,
            message:'Products fetched successfully',
            products:products
        })
    }
    catch(e)
    {
        return res.json({
            success:false,
            error:e,
            message:'Internal Server Error'
        })
    }
})

//find all the products of a particular category name
router.get('/getByCategoryName/:categoryName',async (req,res)=>{
    const {categoryName}=req.params;
    const query={categoryName:{$regex:categoryName,$options:'i'}};
    try{
        const products=await Product.find(query);
        return res.json({
            success:true,
            message:'Products fetched successfully',
            products:products
        })
    }
    catch(e)
    {
        return res.json({
            success:false,
            error:e,
            message:'Internal Server Error'
        })
    }
})


//best 4 phones
router.get('/bestfives',async (req,res)=>{
    const q=req.query;
  
    const query={
        categoryName:{$regex:q.categoryName,$options:'i'}
    };
    try{
        const products=await Product.find(query).sort({
            price:-1
        }).limit(4);
        return res.json({
            success:true,
            message:'Products fetched successfully',
            products:products
        })
    }
    catch(e)
    {
        return res.json({
            success:false,
            error:e,
            message:'Internal Server Error'
        })
    }
})

//get product by product id
router.get('/getById/:productId',async (req,res)=>{
    const {productId}=req.params;
    try{
        const product=await Product.findById(productId);
        return res.json({
            success:true,
            message:'Product fetched successfully',
            product:product
        })
    }
    catch(e)
    {
        return res.json({
            success:false,
            error:e,
            message:'Internal Server Error'
        })
    }
})
module.exports=router;