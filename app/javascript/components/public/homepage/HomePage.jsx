import React from "react";
// import demoImageFake from "<%=asset_path('/images/demo-image.png')%/>"
export default () => (
  <div className="w-full h-screen absolute top-0 -z-10">
    <div className="w-1/2 h-full bg-[#4E5B9E]">
      {/* <img className="w-full h-10" src={demoImageFake}/> */}
      <img className="w-full h-10" src="<%=asset_path('/images/demo-image.png')%>"/>
      Hello World, this is the main homepage
    </div>
  </div>
);
