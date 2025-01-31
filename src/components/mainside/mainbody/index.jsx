import { useState } from "react";
import lavashimg from "../../../assets/svg/lavash.svg";
import edit from "../../../assets/svg/edit.svg";
import delete1 from "../../../assets/img/delete.png";
import tick from "../../../assets/svg/tick.svg";

const Mainsidebody = ({
  id,
  name,
  description,
  price,
  category,
  image,
  deleteAdminPanel,
  editAdminPanel,
  editFoodProductid,
  seteditFoodProductid,
  saveadminpanel,
}) => {
  const [editProductName, seteditProductName] = useState(name);
  const [editprice, seteditrice] = useState(price);
  //
  const [editcategory, seteditcategory] = useState(category);
  const [editDescription, seteditdescription] = useState(description);

  return (
    <div className="bg-[#fff] p-[10px] w-full rounded-lg grid grid-cols-5 items-center">
      <div className="flex items-center gap-5">
        <img src={lavashimg} alt="" />
        {editFoodProductid === id ? (
          <input
            onChange={(e) => seteditProductName(e.target.value)}
            className="w-full"
            value={editProductName}
            type="text"
          />
        ) : (
          <p>{name}</p>
        )}
      </div>
      <div>
        {editFoodProductid === id ? (
          <input
            onChange={(e) => seteditcategory(e.target.value)}
            className="w-full"
            value={editcategory}
            type="text"
          />
        ) : (
          <p>{category}</p>
        )}
      </div>
      <div>
        {editFoodProductid === id ? (
          <input
            onChange={(e) => seteditrice(e.target.value)}
            className="w-full"
            value={editprice}
            type="text"
          />
        ) : (
          <p>{price} UZS</p>
        )}
      </div>
      <div>
        {editFoodProductid === id ? (
          <input
            onChange={(e) => seteditdescription(e.target.value)}
            className="w-full"
            value={editDescription}
            type="text"
          />
        ) : (
          <p>{description}</p>
        )}
      </div>
      <div className="flex items-center gap-10">
        {editFoodProductid === id ? (
          <button
            className=""
            onClick={() =>
              saveadminpanel(
                id,
                editProductName,
                editcategory,
                editprice,
                editDescription
              )
            }>
            <img src={tick} alt="" />
          </button>
        ) : (
          <button onClick={() => editAdminPanel(id)}>
            <img src={edit} alt="" />
          </button>
        )}

        <button onClick={() => deleteAdminPanel(id)}>
          <img src={delete1} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Mainsidebody;
