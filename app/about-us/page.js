import React from 'react'

const aboutus = () => {
    return (
        <main>
            <section className=' bg-gradient-to-b from-[#270D0D] via-[#20101C] to-[#111027] min-h-[210vh] w-auto'>
                <div className='flex flex-col justify-center items-center pt-8'>
                    <div className="h1">
                        <h1 className='text-[#F2E8F2] font-bold text-3xl'>About Us</h1>
                    </div>

                    <div className="para flex flex-col justify-center items-center w-4/5 mt-5">
                        <p className='font-bold text-lg mt-2'>'Fueling Creativity,One Cup at a Time'</p>
                    </div>
                    <div className="para w-5/6 mt-5">
                        <p>At Get Me A Chai, we believe in empowering creators, developers, and influencers by connecting them with their supporters in a meaningful way. Our platform provides a space where creativity thrives and projects come to life through the collective support of loyal fans and patrons. Whether you're a content creator producing captivating videos, a developer crafting innovative apps, or an influencer sharing your passion, we are here to help you achieve your dreams.</p>
                        <br />
                        <p>Our mission is to bridge the gap between talent and support by enabling creators to receive funding for their work. We strive to make the process seamless and rewarding for both creators and their patrons. At Get Me A Chai, your success is our priority, and we aim to provide a platform that allows you to focus on what you do best—creating impactful and inspiring content.</p>
                        <br />
                        <p>We understand the power of community and the magic that happens when people come together to support a cause they believe in. By fostering this connection, Get Me A Chai helps creators turn their ideas into reality and nurtures a culture of innovation and collaboration. Join us in celebrating creativity, passion, and the human spirit</p>
                    </div>

                    <div className="para2 flex flex-col justify-center items-center">
                        <h2 className='text-[#F2E8F2] font-bold text-lg mt-8'>Why Choose Us?</h2>
                    </div>
                    <div className="para2 w-5/6 mt-5">
                        <p>At Get Me A Chai, we are more than just a platform; we are a movement to empower creators worldwide. What sets us apart is our commitment to providing creators with the tools and resources they need to grow. From transparent funding options to easy-to-use features, we ensure that creators can focus entirely on their craft while connecting with their audience.</p>
                        <br />
                        <p>We also prioritize inclusivity, welcoming creators from diverse fields and backgrounds. No matter your passion—be it music, art, programming, or storytelling—Get Me A Chai is designed to help you monetize your creativity and build lasting relationships with your supporters.</p>
                    </div>

                    <div className="para3 flex flex-col justify-center items-center">
                        <h2 className='text-[#F2E8F2] font-bold text-lg mt-8'>Our Vision</h2>
                    </div>
                    <div className="para3 w-5/6 mt-5">
                        <p>Our vision is to create a world where every creator has the freedom to follow their passion without financial limitations. We aim to redefine how creators and supporters interact by cultivating a platform that prioritizes trust, transparency, and genuine connection.</p>
                        <br />
                        <p>In the future, we aspire to expand our services, providing even more features that enhance the experience for both creators and patrons. Whether it's advanced analytics, custom branding options, or exclusive reward systems, Get Me A Chai is dedicated to constantly innovating and evolving to meet the needs of our community.</p>
                        <br />
                        <p>With your support, we can continue to grow as a platform that not only sustains creators but also inspires them to push boundaries and redefine possibilities.</p>
                    </div>
                </div>
                <div className="bg-white h-1 opacity-10 mt-20 mx-16"></div>

                <div className="cards flex mt-12 mb-8 justify-around">
                    <div className="card1 flex flex-col gap-3 justify-center items-center h-64 w-80 bg-[#110F0F] rounded-3xl">
                        <img className='h-12 w-12 mt-6' src="/l1.gif" alt="custom.gif" />
                        <span className="text-center text-lg font-semibold">Easy Customization</span>
                        <div className='flex w-60 justify-center items-center h-full'>
                            <p className="text-center text-base">Personalize your campaign page's look and feel, from color schemes to fonts, to match your unique style.</p>
                        </div>
                    </div>
                    <div className="card2 flex flex-col gap-3 justify-center items-center h-64 w-80 bg-[#110F0F] rounded-3xl ">
                        <img className='h-12 w-12 mt-6' src="/l2.gif" alt="custom.gif" />
                        <span className="text-center text-lg font-semibold">High Performance</span>
                        <div className='flex w-60 justify-around items-center h-full'>
                            <p className="text-center text-base">Our platform is optimized for fast performance, ensuring your supporters can access your campaign quickly and easily.</p>
                        </div>
                    </div>
                    <div className="card3 flex flex-col gap-3 justify-center items-center h-64 w-80 bg-[#110F0F] rounded-3xl ">
                        <img className='h-12 w-12 mt-6' src="/l3.gif" alt="custom.gif" />
                        <span className="text-center text-lg font-semibold">Comprehensive Features</span>
                        <div className='flex w-60 justify-center items-center h-full'>
                            <p className="text-center text-base" >Our platform offers everything you need to run a successful campaign, from analytics to support tools.</p>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
}

export default aboutus

// either Static metadata
export const metadata = {
    title: 'About- Get Me A Chai',
  }