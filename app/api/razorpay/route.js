import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import Razorpay from "razorpay";
import connectDb from "@/db/connectDb";
import User from "@/models/User";

export const POST = async (req) =>{
    await connectDb()
    let body = await req.formData()
    body = Object.fromEntries(body)

    // check if razorpayOrderId is present on the server 
let p = await Payment.findOne({oid: body.razorpay_order_id})
if(!p){
    return NextResponse.json({success: false, message:"Order id not found"})
}

// fetch the secret of the user who is getting payment 
    let user = await User.findOne({username: p.to_user})
    const secret = user.razorpaysecret


// verify the payment 
let xx = validatePaymentVerification({"order_id": body.razorpay_order_id, "payment_id":body.razorpay_payment_id}, body.razorpay_signature,secret)

if (xx){
    const updatedPayment = await Payment.findOneAndUpdate({oid: body.razorpay_order_id}, {done: "true"}, {new:true})
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`)
}
else{
    return NextResponse.json({success: false, message:"Payment Verification Failed"})
}
}


// Summary:
// This code handles a POST request to verify a payment made through Razorpay.
// It connects to a MongoDB database to verify that the order ID exists.
// It uses Razorpay's utility to ensure the payment data hasn't been tampered with.
// If verification is successful, it updates the payment status in the database and redirects the user.
// If verification fails, it returns an error message.