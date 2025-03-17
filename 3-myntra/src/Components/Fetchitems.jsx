import {useSelector,useDispatch} from "react-redux"
import { useEffect } from "react";
import { fetchstatusactions } from "../Store/fetchslice.jsx"
import { itemactions } from "../Store/Itemslice.jsx";
export const Fetchitems=()=>{
  const fetchStatus=useSelector(store=>store.fetchStatus);
  const dispatch=useDispatch();
  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchstatusactions.markfetchingstarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchstatusactions.markfetchdone());
         dispatch(fetchstatusactions.markfetchingfinished());
        dispatch(itemactions.addinitialitems(items[0]));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return(
    <>
    </>
    );
}
