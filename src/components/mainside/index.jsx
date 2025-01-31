import { useEffect, useState } from "react";
import MainsideHeader from "./mainsideheader";
import Mainsidebody from "./mainbody";
import { axiosForadmin } from "../axios/axios";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

let baseurl = import.meta.env.VITE_BASE_URL;

const Mainside = () => {
  const [data, setdata] = useState([]);
  //
  const [InputName, setInputName] = useState("");
  const [Inputprice, setInpuprice] = useState("");
  //
  const [Inputcategory, setInpucategory] = useState("");
  const [Inputdescription, setInpudescription] = useState("");
  //
  const [editFoodProductid, seteditFoodProductid] = useState(null);
  //

  let useAxios = async () => {
    axiosForadmin.get().then((data) => setdata(data.data));
  };

  useEffect(() => {
    useAxios();
  }, []);

  // crud method started for admin panel

  /// toasts
  const added = () => toast.info("added successfully");

  const deleted = () => toast.error("Deleted successfully");

  const createFoodProduct = (e) => {
    e.preventDefault();

    axiosForadmin
      .post(baseurl, {
        name: InputName,
        price: Inputprice,
        category: Inputcategory,
        description: Inputdescription,
      })
      .then(
        (value) => useAxios(),

        setInpucategory(""),
        setInpudescription(""),
        setInpuprice(""),
        setInputName(""),
        added()
      );
  };

  const deleteAdminPanel = (id) => {
    axiosForadmin
      .delete(`${baseurl}/${id}`)
      .then((data) => useAxios(), deleted());
  };
  const saveadminpanel = (
    id,
    editProductName,
    editcategory,
    editprice,
    editDescription
  ) => {
    axiosForadmin
      .put(`${baseurl}/${id}`, {
        name: editProductName,
        price: editprice,
        category: editcategory,
        description: editDescription,
      })
      .then((data) => useAxios(), deleted());
    seteditFoodProductid(null);
  };
  const editAdminPanel = (id) => {
    seteditFoodProductid(id);
  };

  //crud methods ended for admin panel
  return (
    <div className="w-[80%] bg-[#f6f6f6]">
      <MainsideHeader
        //added
        added={added}
        createFoodProduct={createFoodProduct}
        //
        InputName={InputName}
        setInputName={setInputName}
        //
        Inputprice={Inputprice}
        setInpuprice={setInpuprice}
        //
        Inputcategory={Inputcategory}
        setInpucategory={setInpucategory}
        //
        Inputdescription={Inputdescription}
        setInpudescription={setInpudescription}
      />
      <div className="w-[95%] m-auto mt-[10px] flex flex-col gap-4">
        {data.map((value) => {
          return (
            <Mainsidebody
              key={value.id}
              {...value}
              deleteAdminPanel={deleteAdminPanel}
              editAdminPanel={editAdminPanel}
              editFoodProductid={editFoodProductid}
              seteditFoodProductid={seteditFoodProductid}
              saveadminpanel={saveadminpanel}
            />
          );
        })}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Mainside;
