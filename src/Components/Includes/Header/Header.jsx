import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import LogoMattelsa from "./Assets/Img/LogoMattelsa.jsx";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import Avatar from "@mui/material/Avatar";
import colombia from "./Assets/Img/colombia.jpg";
import Hidden from "@mui/material/Hidden";
import "./Assets/styles.css";
function Header() {
  return (
    <div>
      <AppBar
        position="static"
        style={{ backgroundColor: "black" }}
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography
            className="icon"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            <Link to="/">
              <LogoMattelsa />
            </Link>
          </Typography>

          <nav className="nav">
            <div className="menu">
              <Link
                variant="button"
                color="text.primary"
                to="/Mens"
                sx={{ my: 1, mx: 1.5 }}
              >
                Dcoumentacion
              </Link>

              <Link
                variant="button"
                color="text.primary"
                to="/Quotation"
                sx={{ my: 1, mx: 1.5 }}
              >
                Servicios-backend
              </Link>

              <Link
                variant="button"
                color="text.primary"
                to="/things"
                sx={{ my: 1, mx: 1.5 }}
              >
                Frontend-web
              </Link>

              <Link
                variant="button"
                color="text.primary"
                to="/store"
                sx={{ my: 1, mx: 1.5 }}
              >
                Frontend-mobile
              </Link>
            </div>

            <Hidden only={["xs", "sm"]}>
              <div className="userMenu">
                <AccountCircleIcon className="userMenu-item" />
                {/*  <SearchIcon className='userMenu-item'/> */}
                {/*  <RedeemIcon className='userMenu-item'/> */}
                <div className="line userMenu-item" />
                <div className="userMenu-item flagAndText">
                  <div className="avatar">
                    {" "}
                    <Avatar
                      sx={{ width: 24, height: 24 }}
                      src={colombia}
                    />{" "}
                  </div>
                  <p>COP</p>
                </div>
              </div>
            </Hidden>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
