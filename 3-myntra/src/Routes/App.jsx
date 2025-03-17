import { Header } from "../Components/Header.jsx"
import { Footer } from "../Components/Footer.jsx"
import { Homeitem } from "../Components/Homeitem.jsx"
import { Outlet } from "react-router-dom";
import { Fetchitems } from "../Components/Fetchitems.jsx"
import { useSelector } from "react-redux";
import { Loadingspinner } from "../Components/Loadingspinner.jsx"
function App() {
  const fetchStatus=useSelector(store=>store.fetchStatus);
  return (
    <>
    <Header />
    <Fetchitems />
    {fetchStatus.currentlyfetching ? <Loadingspinner />:<Outlet />}
    <Footer />
    </>
  )
}

export default App
