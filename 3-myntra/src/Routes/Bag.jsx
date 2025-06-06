import { Bagsummary } from "../Components/Bagsummary.jsx"
import {Bagitem} from "../Components/Bagitem.jsx"
import {useSelector} from "react-redux"
export const Bag=()=>{
  const bagitems=useSelector(state=>state.bag);
  const items=useSelector(state=>state.items);
  const finalitems=items.filter(item=>{
    const itemindex=bagitems.indexOf(item.id);
    return itemindex>=0;
  })
  return(
    <>
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalitems.map(item=> <Bagitem item={item} />)}
          
        </div>
        <Bagsummary />
      </div>
    </main>
    </>
    )
}
