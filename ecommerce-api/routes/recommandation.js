const router=require('express').Router();
const Products=require('../modals/Product')
const validateToken=require('../middlewares/tokenValidaton');
const User  =require('../modals/User');

//recommandation for new user
router.get('/newuser',validateToken,async (req,res)=>{
    const user_id=req.user_id;
    const user_role=req.user_role;
    try{

        let user=await User.findById(user_id);
        if(user.purchases.length>0)
        {
           return res.json({
                success:true,
                message:'This route is not for new user'
            })
        }
      let product=await Products.find({});
      const array=[];
      for(let i=0;i<product.length;i++)
      {
        if(product[i].ratings.length>=1)
        {
            array.push(product[i]);
        }  
      }
      array.sort((a,b)=>{
          return b.ratings.length-a.ratings.length;})      
        return res.json({
            success:true,
            products:array
        })
    }catch(e)
    {
        res.json({
            success:false,
            message:'error occured',
            error:e
        })
    }
})

module.exports=router;