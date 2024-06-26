import React from "react";
import devData from "../data/devData.json";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full">
      <div className="relative h-32 md:mx-auto bg-stone-800 items-center" >
        <div className="absolute grid gird-cols-2 bottom-0 inset-x-10 inset-y-5 items-center">
          <div id="팀 로고" className="text-xl font-bold text-slate-50">
            사진의 마술사
          </div>
          <div className="h-16">
            <div className="text-sm text-right">
              <div className="text-xl text-stone-200">참여한 개발자</div>
              {devData.users.map(
                user => (
                  <div>
                  <ul className="px-2 text-stone-400">{user.name}
                    <a href={user.gitAddr}><i className="fa-brands fa-github"/></a>
                  </ul>
                  </div>  
                ))}
            </div>
          </div>
          <div className= "col-span-2 px-40 bottom-0 text-stone-300">
            projected by CJU
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
