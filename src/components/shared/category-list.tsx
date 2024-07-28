import React from "react";
import png from "@/assets/pngs/Image.png";
import Image from "next/image";
import { Button } from "../ui/button";
import ArrowRightIcon from "@/assets/svgs/arrow-right";

function CategoryList() {
  return (
    <div className="bg-Black-45 p-4 rounded-xl border border-Black-90">
      <div className="grid grid-cols-2 gap-1">
        {Array(4)
          .fill(png)
          .map((img, index) => (
            <Image key={index} src={img} alt="" />
          ))}
      </div>
      <div className="flex justify-between items-center">
        <h6>Action</h6>
        <Button size="icon" variant="ghost">
          <ArrowRightIcon />
        </Button>
      </div>
    </div>
  );
}

export default CategoryList;
