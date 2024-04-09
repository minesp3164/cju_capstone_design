import React from "react";
import devData from "../data/devData.json";

const Footer = () => {
  return(
    <div className="grid place-items-center bg-cyan-900 " >
      {devData.users.map(
        user => (
          <div className="p-2 text-amber-50">{user.name}
            <a href={user.gitAddr}><i className="fa-brands fa-github"/></a>
          </div>
        ))}
    </div>
  )
}
export default Footer;