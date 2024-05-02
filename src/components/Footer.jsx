import React from "react";
 function Footer(){
    const Cyear = new Date().getFullYear();

    return <footer>
        <p> copyright  {Cyear} </p>
    </footer>

 }
 export default Footer;