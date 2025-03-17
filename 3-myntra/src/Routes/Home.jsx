import { Homeitem } from "../Components/Homeitem.jsx"
import {useSelector} from "react-redux"
export const Home=()=>{
  const items=useSelector(store=>store.items)
  return(
    <>
    <main>
        <div className="items-container">
         {items.map(item=><Homeitem key={item.id} item={item} />)} 
        </div>
    </main>
    </>
    )
}