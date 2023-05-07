const Razorpay=require("razorpay")
const instance=new Razorpay({
    key_id:"rzp_test_TArLTQzK283PIB",
    key_secret:"KYlgqhB5jk3EDgYPr8kTHwei"
})

const checkout=async(req,res)=>{
  try{
    const {amount}=req.body
    const option={
        amount:amount*100,
        currency:"INR"
    }
    const order=await instance.orders.create(option)
    res.json({
        success:true,
        order
    })
  }catch(error){
    console.log(error)
  }
}


const paymentVerification=async(req,res)=>{
    const {razorpayOrderId,razorpayPaymentId}=req.body
    res.json({
        razorpayOrderId,
        razorpayPaymentId
    })
}
module.exports={
    checkout,
    paymentVerification
}