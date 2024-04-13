import React from "react";
import devData from "../data/devData.json";

const Footer = () => {
  return (
    <div className="relative h-32 w-full my-2 md:mx-auto bg-cyan-900 items-center" >
      <div className="absolute grid gird-cols-2 bottom-0 inset-x-10 inset-y-5 items-center">
        <div className="">
          사진의 마술사
        </div>
        <div className="h-16">
          {devData.users.map(
            user => (
              <ul className=" px-2 text-amber-50">{user.name}
                <a href={user.gitAddr}><i className="fa-brands fa-github"/></a>
              </ul>
            ))}
        </div>
        <div className= "col-span-2  px-20 bottom-0">
          cju
        </div>
      </div>
    </div>
  )
}
export default Footer;