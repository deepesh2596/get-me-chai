import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { fetchuser, updateProfile } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'


const Dashboard = () => {
    const { data: session, update } = useSession()
    const router = useRouter()
    const [form, setform] = useState({})

    useEffect(() => {
        getData()
        if (!session) {
            router.push('/login')
        }
    }, [router, session])

    const getData = async () => {
        let u = await fetchuser(session.user.name)
        setform(u)
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        let a = await updateProfile(e, session.user.name)
        toast.success('Profile updated!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });

    }

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored" />
            <div className="container mx-auto py-5">
                <h1 className='text-center my-5 text-2xl font-bold'>Welcome to your dashboard</h1>
                <form className='max-w-md mx-auto' action={handleSubmit}>
                    <div className='my-1'>
                        <label htmlFor="name" className='block mb-2 text-xs font-medium text-white'>Name</label>
                        <input value={form.name ? form.name : ""} onChange={handleChange} type="text" name='name' id='name' className='block w-full p-2 bg-slate-800 border border-gray-600 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus-ring-blue-500 dark:focus:border-blue-500' />
                    </div>
                    {/* input for email  */}
                    <div className=' my-2'>
                        <label htmlFor="email" className='block mb-2 text-sm font-medium text-white'>Email</label>
                        <input value={form.email ? form.email : ""} onChange={handleChange} type="text" name='email' id='email' className='block w-full p-2 bg-slate-800 border border-gray-600 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus-ring-blue-500 dark:focus:border-blue-500' />
                    </div>
                    {/* input for userusername */}
                    <div className=' my-2'>
                        <label htmlFor="username" className='block mb-2 text-sm font-medium text-white'>Username</label>
                        <input value={form.username ? form.username : ""} onChange={handleChange} type="text" name='username' id='username' className='block w-full p-2 bg-slate-800 border border-gray-600 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus-ring-blue-500 dark:focus:border-blue-500' />
                    </div>
                    {/* input for profile picture of input type text  */}
                    <div className=' my-2'>
                        <label htmlFor="profilepic" className='block mb-2 text-sm font-medium text-white'>Profile Picture</label>
                        <input value={form.profilepic ? form.profilepic : ""} onChange={handleChange} type="text" name='profilepic' id='profilepic' className='block w-full p-2 bg-slate-800 border border-gray-600 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus-ring-blue-500 dark:focus:border-blue-500' />
                    </div>
                    {/* input for cover pic  */}
                    <div className=' my-2'>
                        <label htmlFor="coverpic" className='block mb-2 text-sm font-medium text-white'>Cover Picture</label>
                        <input value={form.coverpic ? form.coverpic : ""} onChange={handleChange} type="text" name='coverpic' id='coverpic' className='block w-full p-2 bg-slate-800 border border-gray-600 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus-ring-blue-500 dark:focus:border-blue-500' />
                    </div>
                    {/* input razorpay credentials  */}
                    <div className=' my-2'>
                        <label htmlFor="razorpayid" className='block mb-2 text-sm font-medium text-white'>Razorpay Id</label>
                        <input value={form.razorpayid ? form.razorpayid : ""} onChange={handleChange} type="text" name='razorpayid' id='razorpayid' className='block w-full p-2 bg-slate-800 border border-gray-600 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus-ring-blue-500 dark:focus:border-blue-500' />
                    </div>
                    {/* input razorpay secret  */}
                    <div className=' my-2'>
                        <label htmlFor="razorpaysecret" className='block mb-2 text-sm font-medium text-white'>Razorpay Secret</label>
                        <input value={form.razorpaysecret ? form.razorpaysecret : ""} onChange={handleChange} type="text" name='razorpaysecret' id='razorpaysecret' className='block w-full p-2 bg-slate-800 border border-gray-600 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus-ring-blue-500 dark:focus:border-blue-500' />
                    </div>
                    {/* submit button  */}
                    <div className='my-6'>
                        <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Save</button>
                    </div>
                </form>

            </div>
        </>

    )
}

export default Dashboard
