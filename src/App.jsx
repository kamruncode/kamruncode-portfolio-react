import { useEffect } from "react";
import { useState } from "react";
import { Navbar } from "./components/Navpar";
import { Articles } from "./pages/articles";
import { AppRoutes } from "./routes";
import { Link } from "react-router-dom";
import Footer from "./components/footer";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
function App() {
  const [dark, SetDark] = useState(true);
  const toggleDark = () => {
    SetDark(!dark);
    console.log(dark);
  };

  return (
    <div className={dark ? "light" : "dark"}>
      <Navbar
        d={
          <div className="cursor-pointer mx-24" onClick={toggleDark}>
            {dark ? (
              <BsFillMoonStarsFill size="1.4rem" color="#292A2D" />
            ) : (
              <BsFillSunFill size="1.4rem" color="yellow" />
            )}
          </div>
        }
      />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
