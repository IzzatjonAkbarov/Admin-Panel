import React from "react";
//images
import avatar from "../../assets/img/Bitmap.png";
//svgs
import box from "../../assets/svg/box.svg";
import catalog from "../../assets/svg/catalog.svg";
import catefory from "../../assets/svg/catefory.svg";
import customers from "../../assets/svg/customers.svg";
import location from "../../assets/svg/location.svg";
import tick from "../../assets/svg/tick.svg";
import xisobot from "../../assets/svg/xisobot.svg";
import logout from "../../assets/svg/logout.svg";
const Aside = () => {
  return (
    <div className="h-[100vh] w-[20%]">
      <div className=" bg-[#fff] h-full flex flex-col justify-between">
        <div>
          <header className="p-6 pb-20">
            <div className="flex items-center gap-5">
              <img src={avatar} alt="" />
              <div className="flex items-start flex-col">
                <h1 className="font-bold text-[#2d3a45]">Fast Food</h1>
                <p className="text-[#2d3a45] text-[12px] font-normal opacity-50">
                  Online maxsulot sotuvi
                </p>
              </div>
            </div>
          </header>

          <div className="flex ">
            <div className="w-1 rounded-r-xl  bg-[#fcb600] "></div>
            <div className=" flex flex-col gap-5   w-full ">
              <button className="flex items-center pl-10 gap-2 hover:bg-[#fcb600] w-[90%] rounded-r-lg hover:text-white transition-all">
                <div className="h-9 w-9  rounded-lg flex items-center justify-center ">
                  <img src={tick} alt="" />
                </div>
                <p>Buyurtmalar</p>
              </button>
              <button className="flex items-center pl-10 gap-2 hover:bg-[#fcb600] w-[90%] rounded-r-lg hover:text-white transition-all">
                <div className="h-9 w-9  rounded-lg flex items-center justify-center ">
                  <img src={box} alt="" />
                </div>
                <p>Maxsulotlar</p>
              </button>
              <button className="flex items-center pl-10 gap-2 hover:bg-[#fcb600] w-[90%] rounded-r-lg hover:text-white transition-all">
                <div className="h-9 w-9  rounded-lg flex items-center justify-center ">
                  <img src={catefory} alt="" />
                </div>
                <p>Kategoriyalar</p>
              </button>
              <button className="flex items-center pl-10 gap-2 hover:bg-[#fcb600] w-[90%] rounded-r-lg hover:text-white transition-all">
                <div className="h-9 w-9  rounded-lg flex items-center justify-center ">
                  <img src={location} alt="" />
                </div>
                <p>Filiallar</p>
              </button>
              <button className="flex items-center pl-10 gap-2 hover:bg-[#fcb600] w-[90%] rounded-r-lg hover:text-white transition-all">
                <div className="h-9 w-9  rounded-lg flex items-center justify-center ">
                  <img src={customers} alt="" />
                </div>
                <p>Mijozlar</p>
              </button>
              <button className="flex items-center pl-10 gap-2 hover:bg-[#fcb600] w-[90%] rounded-r-lg hover:text-white transition-all">
                <div className="h-9 w-9  rounded-lg flex items-center justify-center ">
                  <img src={xisobot} alt="" />
                </div>
                <p>Xisobot</p>
              </button>
              <button className="flex items-center pl-10 gap-2 hover:bg-[#fcb600] w-[90%] rounded-r-lg hover:text-white transition-all">
                <div className="h-9 w-9  rounded-lg flex items-center justify-center ">
                  <img src={catalog} alt="" />
                </div>
                <p>Katalog</p>
              </button>
            </div>
          </div>
        </div>
        <button className=" mb-10 flex items-center pl-10 gap-2 hover:bg-[#fcb600] w-[90%] rounded-r-lg hover:text-white transition-all">
          <div className="h-9 w-9  rounded-lg flex items-center justify-center ">
            <img src={logout} alt="" />
          </div>
          <p>Chiqish</p>
        </button>
      </div>
    </div>
  );
};

export default Aside;
