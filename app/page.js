import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col items-center gap-4 text-white h-[44vh] px-5 md:px-0 text-xs md:text-base">
        <div className="font-bold flex gap-2 md:gap-3 md:text-3xl justify-center items-center text-xl">Get Me a Chai <span><img className="invertImg" src="/tea1.gif" width={40} alt="loading img" /></span> </div>
        <p className="text-center md:text-left">
          A crowdfunding platform for creators. Get funded by your fans and followers. Start now!
        </p>
        <div>
          <Link href={"/login"}>
            <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          </Link>
          <Link href="/about-us">
            <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read more</button>
          </Link>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto py-28 pt-10 px-10">
        <h2 className="text-2xl font-bold text-center mb-12">Your Fans can buy you a Chai</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-2 flex flex-col justify-center items-center">
            <img className="mx-2.5  bg-slate-400 rounded-full p-1 text-black" src="https://cdnl.iconscout.com/lottie/premium/thumb/man-working-while-sitting-on-desk-animation-download-in-lottie-json-gif-static-svg-file-formats--laptop-using-table-at-office-people-mobile-and-pack-animations-4596736.gif" width={80} alt="" srcSet="" />
            <p className="font-bold text-center">Fans Ready to Support</p>
            <p className="text-center">Enthusiastic fans are always here to help.</p>
          </div>
          <div className="item space-y-2 flex flex-col justify-center items-center">
            <img className="mx-2.5 my-1 bg-slate-400 rounded-full p-1 text-black" src="https://cdn.pixabay.com/animation/2023/03/23/17/00/17-00-52-997_512.gif" width={127} alt="" srcSet="" />
            <p className="font-bold text-center">Collaborate with Fans</p>
            <p className="text-center">Build together with your loyal supporters.</p>
          </div>
          <div className="item space-y-2 flex flex-col justify-center items-center">
            <img className="mx-2.5 my-0.5 bg-slate-400 rounded-full p-1 text-black" src="https://i.pinimg.com/originals/f6/b1/10/f6b110c3fedf27c65221a27b0d97cde0.gif" width={100} alt="" srcSet="" />
            <p className="font-bold text-center">Community-Driven Support</p>
            <p className="text-center">Tap into a thriving community for help.</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container m-5 w-full py-28 pt-10 flex flex-col items-center justify-center space-y-8">
        <h2 className="text-2xl font-bold text-center mb-6">Learn More About Us</h2>
        <p className="text-lg text-center leading-relaxed w-4/5">
          At Get Me A Chai, we connect developers, creators, and influencers with their supporters, enabling them to fund their projects and bring innovative ideas to life.
        </p>
        <p className="text-lg text-center leading-relaxed w-4/5">
          Our mission is to empower individuals through financial support, allowing them to focus on what they do best—creating, sharing, and building a better future.
        </p>
        <p className="text-lg text-center leading-relaxed w-4/5">
          We believe in the power of community. By enabling patrons to contribute, we transform dreams into reality and inspire creativity.
        </p>
      </div>

    </>
  );
}
