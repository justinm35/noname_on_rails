import React from "react";
export default () => (
  <div className="w-full h-screen absolute top-0 -z-10 flex flex-col lg:flex-row">
    <div className="w-1/2 h-full bg-[#4E5B9E] relative">
      <img className="w-full shadow-2xl h-auto absolute -right-44 top-1/2 -translate-y-1/2" src="assets/demo-image-fake.png"/>
    </div>
    <div className="w-full flex items-center pl-48 font-opensans font-bold">
      <h1 className="text-3xl lg:text-5xl max-w-3xl">The <span className="text-[#4E5B9E] font-extrabold">quickest</span> way to manage your resources.</h1>
    </div>
  </div>
);
