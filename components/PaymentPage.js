"use client"
import React, { useState } from 'react'
import Script from 'next/script'
import { initiate } from '@/actions/useractions'
import { useSession } from 'next-auth/react'
import { fetchuser, fetchPayments, initiate } from '@/actions/useractions'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'
import { useRouter } from 'next/navigation'



const PaymentPage = ({ username }) => {
    const {data:session} = useSession()
    const [paymentform, setpaymentform] = useState({
        name: '',
        message: '',
        amount: ''
    })
    const [currentUser, setcurrentUser] = useState({})
    const [payments, setPayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()


    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (SearchParams.get('payment done') == 'true') {
            toast('🦄 Payment successfull !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
        router.push(`/${username}`)
    }, [])

    const handleChange = (e) => {
        setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getData = async () => {
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbpayments = await fetchPayments(username)
        setPayments(dbpayments)
        console.log(u, dbpayments)
    }


    const pay = async (amount) => {
        // get the order id 
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Get Me A Chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Rohan Das", //your customer's name
                "email": "rohan.das@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
            {/* Same as */}
            <ToastContainer />
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className='cover w-full relative'>
                <img className='object-cover w-full h-90' src={currentUser.coverpic} alt="Loading img" />
            </div>
            <div className='absolute bottom-[210px] right-[45%]'>
                <img className='w-[144px] h-[96px] border-white border-2 rounded-lg ' src={currentUser.profilepic} alt="loading img" />
            </div>
            <div className="info flex flex-col justify-center items-center my-20 mb-32 gap-2">
                <div className='font-bold text-lg'>

                    @{username}
                </div>
                <div className='text-slate-400'>
                    Let's help {username} get a Chai!
                </div>
                <div className='text-slate-400'>
                    {payments.length} Payments . ₹{payments.reduce((a,b) => a + b.amount, 0)} raised
                </div>
                <div className="payment flex gap-3 w-[80%] mt-11">
                    <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        {/* Show list of all the supporters as leaderboard  */}
                        <h2 className='text-2xl font-bold my-5'>Our Top Supporters</h2>
                        <ul className='mx-5'>
                            {payments.length == 0 && <li>No payments yet</li>}
                            {payments.map((p, i) => {
                                return <li key={i} className='my-3 flex gap-1 items-center'>
                                    <img width={25} src="avatar.gif" alt="user avatar" />
                                    <span>
                                        {p.name} donated <span className='font-bold'>{p.amount}</span> with a message"{p.message}"
                                    </span>
                                </li>
                            })}
                        </ul>

                    </div>
                    <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
                        <div className='flex gap-2 flex-col'>
                            {/* input for name and message  */}
                            <div>
                                <input onChange={handleChange} value={paymentform.name} name='name' type="" className='w-full p-2 rounded-lg bg-slate-800' placeholder='Enter name' />
                            </div>
                            <input onChange={handleChange} value={paymentform.message} name='message' type="" className='w-full p-2 rounded-lg bg-slate-800' placeholder='Enter message' />
                            <input onChange={handleChange} value={paymentform.amount} name='amount' type="text" className='w-full p-2 rounded-lg bg-slate-800' placeholder='Enter amount' />

                            <button onClick={() => pay(Number.parseInt(paymentform.amount) * 100)} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabledbg-slate-600 disabled:from-purple-100" disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4 || paymentform.amount?.length < 1}>Pay</button>
                        </div>
                        {/* or choose from these amounts  */}
                        <div className='flex gap-2 mt-4'>
                            <button className='bg-slate-800 p-1 rounded-lg' onClick={() => pay(1000)}> Pay ₹10</button>
                            <button className='bg-slate-800 p-1 rounded-lg' onClick={() => pay(2000)}> Pay ₹20</button>
                            <button className='bg-slate-800 p-1 rounded-lg' onClick={() => pay(3000)}> Pay ₹30</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PaymentPage