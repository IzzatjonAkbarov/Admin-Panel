import React from "react";
import lavashimg from "../../../assets/svg/lavash.svg";
import edit from "../../../assets/svg/edit.svg";
import delete1 from "../../../assets/img/delete.png";

const Mainsidebody = ({
  id,
  name,
  description,
  price,
  category,
  image,
  deleteAdminPanel,
  editAdminPanel,
}) => {
  return (
    <div className="bg-[#fff] p-[10px] w-full rounded-lg grid grid-cols-5 items-center">
      <div className="flex items-center gap-5">
        <img src={lavashimg} alt="" />
        <p>{name}</p>
      </div>
      <div>
        <p>{category}</p>
      </div>
      <div>
        <p>{price}UZS</p>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div className="flex items-center gap-10">
        <button onClick={() => editAdminPanel(id)}>
          <img src={edit} alt="" />
        </button>
        <button onClick={() => deleteAdminPanel(id)}>
          <img src={delete1} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Mainsidebody;
