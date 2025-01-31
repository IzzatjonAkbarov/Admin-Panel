import React from "react";
import add from "../../../assets/svg/addproduct.svg";
import filter from "../../../assets/svg/filter.svg";
const MainsideHeader = ({
  createFoodProduct,
  //
  InputName,
  setInputName,
  //
  Inputprice,
  setInpuprice,
  //
  Inputcategory,
  setInpucategory,
  //
  Inputdescription,
  setInpudescription,
}) => {
  return (
    <>
      <div className="w-full">
        <div className="flex items-center gap-0.5 ">
          <div className="w-[20%] bg-[#fff]">
            <div className=" h-[84px] flex items-center justify-center">
              <label htmlFor="check" className="flex items-center gap-5">
                <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#20d472]">
                  <img src={add} alt="" />
                </div>
                <p className="text-start text-[12px]">
                  Yangi maxsulot <br /> qo’shish
                </p>
              </label>
            </div>
          </div>
          <div className=" w-[80%] bg-[#fff] h-[84px] px-10 flex items-center gap-5 ">
            <form className="w-[40%]" action="">
              <input
                className="w-full p-3 rounded-full bg-[#f6f6f6]"
                type="text"
                placeholder="Qidirish"
              />
            </form>
            <img src={filter} alt="" />
          </div>
        </div>
        <div className="h-[36px] bg-[#fff] w-full mt-5 flex items-center justify-center">
          <div className="grid grid-cols-5 w-[90%] m-auto">
            <p className="uppercase text-[11px] font-bold">Maxsulot</p>
            <p className="uppercase text-[11px] font-bold">Kategoriya</p>
            <p className="uppercase text-[11px] font-bold">Narxi</p>
            <p className="uppercase text-[11px] font-bold">Qo’shimcha</p>
            <p className="uppercase text-[11px] font-bold">ACTION</p>
          </div>
        </div>
      </div>
      <input className="hidden" id="check" type="checkbox" />

      <div className="w-[100vw] h-[100vh] addingItem transition-[0.5s]  fixed top-0 flex right-[-100%] ">
        <label
          htmlFor="check"
          className="w-[70%] h-[100vh] bg-[#0000003f] leftSideOfAddingCard   backdrop-blur-xs"></label>{" "}
        <div className="w-[30%] h-[100vh] bg-white">
          <form
            onSubmit={(event) => {
              createFoodProduct(event);
            }}
            className="bg-white p-6 rounded shadow-md">
            <h3 className="text-lg font-semibold mb-4">
              Yangi Maxsulot Qo’shish
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <input
                value={InputName}
                onChange={(e) => setInputName(e.target.value)}
                required
                id="name"
                type="text"
                placeholder="Nomi"
                className="border border-[#fcb600] p-2 rounded w-full outline-none"
              />
              <input
                value={Inputcategory}
                required
                onChange={(e) => setInpucategory(e.target.value)}
                id="category"
                type="text"
                placeholder="Kategoriya"
                className="border border-[#fcb600] p-2 rounded w-full outline-none"
              />
              <input
                value={Inputprice}
                required
                onChange={(e) => setInpuprice(e.target.value)}
                id="price"
                type="text"
                placeholder="Narxi"
                className="border border-[#fcb600] p-2 rounded w-full outline-none"
              />
              <input
                id="image"
                type="file"
                className="border border-[#fcb600] p-2 rounded w-full outline-none"
              />
              <textarea
                required
                value={Inputdescription}
                onChange={(e) => setInpudescription(e.target.value)}
                id="description"
                placeholder="Tavsif"
                className="border border-[#fcb600] p-2 rounded w-full outline-none col-span-2"></textarea>
            </div>
            <button className="mt-4 bg-[#fcb600] text-white px-4 py-2 rounded">
              Saqlash
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default MainsideHeader;
