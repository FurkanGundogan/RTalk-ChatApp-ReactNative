import React from "react";
import HomeNav from "./HomeNav";
import SignNav from "./SignNav";

const AuthNav = () => {
  const auth = false;
  return <>{auth ? <HomeNav /> : <SignNav />}</>;
};

export default AuthNav;
