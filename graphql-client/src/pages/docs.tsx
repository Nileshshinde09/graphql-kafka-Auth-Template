import { Separator } from "@/components/ui/separator";
import React from "react";
const Docs = () => {
  return (
    <div className="w-full h-[94%] mt-10 rounded-xl border-2 border-[#8f89e6] flex">
      <div className="w-[15rem] p-2 rounded-l-xl border-2 border-[#8f89e6] bg-black">
        Nilesh Kashinath shinde
        <Separator className="w-[100%] mx-auto bg-[#8f89e6]"/>
      </div>
      <div className="w-full h-full rounded-r-xl border-2 border-[#8f89e6]">
        <div className="w-[100%] bg-black/50 h-full border-2 p-2 mx-auto rounded-r-xl">
          hi
        </div>
      </div>
    </div>
  );
};

export default Docs;
