// import React, { useState, useEffect } from "react";
// import styles from "../src/Navbar.module.scss";


// export default function Navbar() {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   const [screenWidth, setScreenWidth] = useState(window.innerWidth);
//   const toggleNav = () => {
//     setToggleMenu(!toggleMenu);
//   };
//   useEffect(() => {
//     const changeWidth = () => {
//       setScreenWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", changeWidth);
//     return () => {
//       window.removeEventListener("resize", changeWidth);
//     };
//   }, []);
//   return (
//     <nav>
//       {(toggleMenu || screenWidth > 500) && (
//         <ul className={styles.list}>
//           <li className={styles.items}>
//             <Link to="/">Home</Link>
//           </li>
//           <li className={styles.items}>Services</li>
//           <li className={styles.items}>Contact</li>
//         </ul>
//       )}

//       <button onClick={toggleNav} className={styles.btn}>
//         BTN
//       </button>
//     </nav>
//   );
// }
