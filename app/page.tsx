import Image from "next/image";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import ContentSection from "./components/ContentSection";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import Footer from "./Footer";
import card1 from "../public/card1.jpeg";
import card2 from "../public/card2.jpeg";
import card3 from "../public/card3.jpeg";
import card4 from "../public/card4.jpeg";
import "./page.scss";
import Test from "./components/Test";

export default function Home() {
  return (
    <div className="w-full ">
      <div className="w-full flex justify-center fixed  text-white bottom-6 animate-bounce z-10">
        <IoArrowDownCircleOutline size={30} />
      </div>
      <div className="sm:p-0 px-4">
        <div className="w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('https://pepecoinsol.xyz/assets/images//logo/o.jpg')]">
          <div className="w-full h-screen bg-black/50">
            <Header />
            <HomeSection />
          </div>
        </div>

        <div className="max-w-[1080px] mx-auto">
          <video autoPlay loop className="w-full full mt-20">
            <source src="/video.mp4" />
          </video>

          <div className="w-full h-[90vh] mt-20 bg-cover bg-no-repeat bg-center bg-[url('https://pepecoinsol.xyz/assets/images/logo/j1.webp')]"></div>
          <div className="w-full h-[90vh] mt-20 bg-cover bg-no-repeat bg-center bg-[url('https://pepecoinsol.xyz/assets/images/logo/j2.jpg')]"></div>
          <div className="w-full h-[90vh] mt-20 bg-cover bg-no-repeat bg-center bg-[url('https://pepecoinsol.xyz/assets/images/logo/j3.jpg')]"></div>
          <div className="w-full h-[90vh] mt-20 bg-cover bg-no-repeat bg-center bg-[url('https://pepecoinsol.xyz/assets/images/logo/j4.jpg')]"></div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
