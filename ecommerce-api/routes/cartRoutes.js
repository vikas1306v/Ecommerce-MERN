const Product=require('../modals/Product')
const User=require('../modals/User')
const Cart=require('../modals/Cart')
const router=require('express').Router()
const tokenValidator=require('../middlewares/tokenValidaton')
//add product to cart

router.post('/add',tokenValidator,async(req,res)=>{
    const user_id=req.user_id  
    const {product_id,count,color,size}=req.body
    try{
        const product=await Product.findOne({_id:product_id})
        if(!product)
        {
            return res.status(404).json({
                success:false,
                message:'product not found'
            })
        }
        const user=await User.findOne({_id:user_id})
        if(!user)
        {
            return res.status(404).json({
                success:false,
                message:'user not found'
            })
        }
        let cart=await Cart.findOne({orderby:user_id})

        if(!cart)
        {
            const newCart=new Cart({
                products:[{
                    product:product_id,
                    count:count,
                    color:color,
                    size:size,
                    price:product.price
                }],
                cartTotal:product.price*count,
                totalAfterDiscount:product.price*count,
                orderby:user_id
            })
           cart= await newCart.save()
            let products=[]
            for(let i=0;i<cart.products.length;i++)
            {
               const prod= await Product.findById(cart.products[i].product.toString());
                products.push({
                    _id:prod._id,
                    title:prod.title,
                    price:prod.price,
                    description:prod.description,
                    brand:prod.brand,
                    images:prod.images,
                    categoryName:prod.categoryName,
                })
            }
            return res.status(200).json({
                success:true,
                message:'product added to cart'
                ,products:products,
                cartTotal:cart.cartTotal,
                totalAfterDiscount:cart.totalAfterDiscount

            })
          
        }else{
            const productExist=cart.products.find(product=>product.product==product_id)
            if(productExist)
            {
                productExist.count+=count
                productExist.price=product.price*productExist.count
                cart.cartTotal+=product.price*count
                cart.totalAfterDiscount+=product.price*count
            }else{
                cart.products.push({
                    product:product_id,
                    count:count,
                    color:color,
                    size:size,
                    price:product.price*count
                })
                cart.cartTotal+=product.price*count
                cart.totalAfterDiscount+=product.price*count
            }
            cart= await cart.save()
            let products=[]
            for(let i=0;i<cart.products.length;i++)
            {
               const prod= await Product.findById(cart.products[i].product.toString());
                products.push({
                    _id:prod._id,
                    title:prod.title,
                    price:prod.price,
                    description:prod.description,
                    brand:prod.brand,
                    images:prod.images,
                    categoryName:prod.categoryName,
                })
            }
            return res.status(200).json({
                success:true,
                message:'product added to cart'
                ,products:products,
                cartTotal:cart.cartTotal,
                totalAfterDiscount:cart.totalAfterDiscount

            })
        }
    }catch(error)
    {
        res.status(500).json({
            success:false,
            message:error.message

        })
    }

})

//delete product from cart
router.delete('/delete/:id',tokenValidator,async(req,res)=>{
    const user_id=req.user_id
    const product_id=req.params.id
    try{
        const cart=await Cart.findOne({orderby:user_id})
        if(!cart)
        {
            return res.status(404).json({
                success:false,
                message:'cart not found'
            })
        }
        const productExist=cart.products.find(product=>product.product==product_id)
        if(!productExist)
        {
            return res.status(404).json({
                success:false,
                message:'product not found'
            })
        }
        cart.products=cart.products.filter(product=>product.product!=product_id)
        cart.cartTotal-=productExist.price
        cart.totalAfterDiscount-=productExist.price
        await cart.save()
        let products=[]
        for(let i=0;i<cart.products.length;i++)
        {
           const prod= await Product.findById(cart.products[i].product.toString());
            products.push({
                _id:prod._id,
                title:prod.title,
                price:prod.price,
                description:prod.description,
                brand:prod.brand,
                images:prod.images,
                categoryName:prod.categoryName,
            })
        }
        return res.status(200).json({
            success:true,
            message:'product deleted from cart'
            ,products:products,
            cartTotal:cart.cartTotal,
            totalAfterDiscount:cart.totalAfterDiscount

        })
    }catch(error)
    {
        res.status(500).json({
            success:false,
            message:error.message

        })
    }
})
module.exports=router