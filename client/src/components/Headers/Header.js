import react from "react";
import "../../css/Headers/Header.css";
import { words } from "../../words";
function Header(){
    return(
        <header>
    {words.headerTitle}
      </header>
    )
}
export default Header