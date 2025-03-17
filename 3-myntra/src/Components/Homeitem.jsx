//import images from "../images/1.jpg"
import { MdAddShoppingCart } from "react-icons/md";
import { MdRemoveShoppingCart } from "react-icons/md";

import { useDispatch,useSelector } from "react-redux"
import { bagactions } from "../Store/Bagslice.jsx"
export const Homeitem=({item})=>{
  const dispactch=useDispatch();
  const bagitem=useSelector(store=>store.bag);
  const elementfound=bagitem.indexOf(item.id)>=0;
  console.log(item.id,elementfound);
  const handleaddtobag=()=>{
    dispactch(bagactions.addtobag(item.id));
  }
  const handleremove=()=>{
    dispactch(bagactions.removefrombag(item.id));
  }
  return(
    <>
      <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
{elementfound?<button type="button" class="btn-add-bag btn btn-danger" onClick={handleremove}>
  <MdRemoveShoppingCart />
  Remove from bag</button>:
      <button type="button" class="btn-add-bag btn btn-success" onClick={handleaddtobag}>
        <MdAddShoppingCart />
        Add to bag</button>
}


    </div>
    </>
    )
}