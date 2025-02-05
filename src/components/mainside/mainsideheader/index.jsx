import React from "react";
import add from "../../../assets/svg/addproduct.svg";
import filter from "../../../assets/svg/filter.svg";
import { FaUser } from "react-icons/fa";
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

  //editFoodProductid
}) => {
  return (
    <>
      <header className="py-5 container1  sticky top-0 z-30 flex h-14 items-center gap-4  ">
        <button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 sm:hidden"
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:r6:"
          data-state="closed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-panel-left h-5 w-5">
            <rect width={18} height={18} x={3} y={3} rx={2} />
            <path d="M9 3v18" />
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </button>
        <nav aria-label="breadcrumb" className="hidden md:flex">
          <ol className="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5">
            <li className="inline-flex items-center gap-1.5">
              <a className="transition-colors hover:text-foreground" href="#">
                Dashboard
              </a>
            </li>
            <li
              role="presentation"
              aria-hidden="true"
              className="[&>svg]:size-3.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </li>
            <li className="inline-flex items-center gap-1.5">
              <a className="transition-colors hover:text-foreground" href="#">
                Products
              </a>
            </li>
            <li
              role="presentation"
              aria-hidden="true"
              className="[&>svg]:size-3.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </li>
            <li className="inline-flex items-center gap-1.5">
              <span
                role="link"
                aria-disabled="true"
                aria-current="page"
                className="font-normal text-foreground">
                All Products
              </span>
            </li>
          </ol>
        </nav>
        <form
          action="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          className="relative ml-auto flex-1 md:grow-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search absolute left-2.5 top-[.75rem] h-4 w-4 text-muted-foreground">
            <circle cx={11} cy={11} r={8} />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            className="flex h-10 border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            placeholder="Search..."
            type="search"
            name="q"
          />
        </form>
        <button
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 overflow-hidden rounded-full"
          type="button"
          id="radix-:r9:"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed">
          <FaUser />{" "}
        </button>
      </header>
      <div className="flex items-center container1">
        <div
          role="tablist"
          aria-orientation="horizontal"
          className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground"
          tabIndex={0}
          data-orientation="horizontal"
          style={{ outline: "none" }}>
          <button
            type="button"
            role="tab"
            aria-selected="true"
            aria-controls="radix-:rb:-content-all"
            data-state="active"
            id="radix-:rb:-trigger-all"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
            tabIndex={-1}
            data-orientation="horizontal"
            data-radix-collection-item>
            All
          </button>
          <button
            type="button"
            role="tab"
            aria-selected="false"
            aria-controls="radix-:rb:-content-active"
            data-state="inactive"
            id="radix-:rb:-trigger-active"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
            tabIndex={-1}
            data-orientation="horizontal"
            data-radix-collection-item>
            Active
          </button>
          <button
            type="button"
            role="tab"
            aria-selected="false"
            aria-controls="radix-:rb:-content-draft"
            data-state="inactive"
            id="radix-:rb:-trigger-draft"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
            tabIndex={-1}
            data-orientation="horizontal"
            data-radix-collection-item>
            Draft
          </button>
          <button
            type="button"
            role="tab"
            aria-selected="false"
            aria-controls="radix-:rb:-content-archived"
            data-state="inactive"
            id="radix-:rb:-trigger-archived"
            className="items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm hidden sm:flex"
            tabIndex={-1}
            data-orientation="horizontal"
            data-radix-collection-item>
            Archived
          </button>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md px-3 h-8 gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-file h-3.5 w-3.5">
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            </svg>
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Export
            </span>
          </button>
          <label htmlFor="check">
            <p className="border rounded-lg p-1">
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add Product
              </span>
            </p>
          </label>
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
                className="border border-[#000] p-2 rounded w-full outline-none"
              />
              <input
                value={Inputcategory}
                required
                onChange={(e) => setInpucategory(e.target.value)}
                id="category"
                type="text"
                placeholder="Kategoriya"
                className="border border-[#000] p-2 rounded w-full outline-none"
              />
              <input
                value={Inputprice}
                required
                onChange={(e) => setInpuprice(e.target.value)}
                id="price"
                type="text"
                placeholder="Narxi"
                className="border border-[#000] p-2 rounded w-full outline-none"
              />
              <input
                id="image"
                type="file"
                className="border border-[#000] p-2 rounded w-full outline-none"
              />
              <textarea
                required
                value={Inputdescription}
                onChange={(e) => setInpudescription(e.target.value)}
                id="description"
                placeholder="Tavsif"
                className="border border-[#000] p-2 rounded w-full outline-none col-span-2"></textarea>
            </div>
            <button className="mt-4 bg-[#000] text-white px-4 py-2 rounded">
              Saqlash
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default MainsideHeader;
