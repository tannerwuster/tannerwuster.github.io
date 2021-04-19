import React from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Icon,
  Logo,
  MenuItem,
  Link,
  Typography,
} from "./styles";
import "./styles.css";
import twlogo from "../../images/twlogo.PNG";

export const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography>
          <Icon>
            <NavLink to="/home">
              <Logo src={twlogo} alt="twlogo" href="" />
            </NavLink>
          </Icon>
        </Typography>
        <div className="parent-div">
          <MenuItem>
            <Link href="/src/components/Home">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/src/components/Projects">Projects</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/src/components/Contact">Contact</Link>
          </MenuItem>
        </div>
      </Toolbar>
    </AppBar>
  );
};

// import React from "react";
// import { NavLink } from "react-router-dom";
// import { Home } from "../Home";
// import { Projects } from "../Projects";
// import { Route, Switch } from "react-router-dom";
// // import { ConnectedRouter } from "connected-react-router";

// import {
//   AppBar,
//   Toolbar,
//   Icon,
//   Logo,
//   MenuItem,
//   Link,
//   Typography,
// } from "./styles";
// import "./styles.css";
// import twlogo from "../../images/twlogo.PNG";

// export const Header = () => {
//   return (
//     <AppBar>
//       <Toolbar>
//         <Typography>
//           <Icon>
//             <NavLink to="/home">
//               <Logo src={twlogo} alt="twlogo" href="" />
//             </NavLink>
//           </Icon>
//         </Typography>
//         <div className="parent-div">
//           {/* <Switch> */}
//             <MenuItem>
//               <Link>
//                 <NavLink to="/src/components/Home">
//                   Home
//                 </NavLink>
//               </Link>
//             </MenuItem>
//             <MenuItem>
//               <Link>
//               <NavLink to="/src/components/Projects">Projects</NavLink>
//               </Link>
//             </MenuItem>
//             <MenuItem>
//               <Link>
//               <NavLink to="/src/components/Contact">
//                 Contact
//                 </NavLink>
//               </Link>
//             </MenuItem>
//           {/* </Switch> */}
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// };
