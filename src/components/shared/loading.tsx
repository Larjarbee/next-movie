import { Loader2Icon } from "lucide-react";
import React from "react";

function Loading() {
  return (
    <div className="flex justify-center p-5">
      <Loader2Icon className="animate-spin" />
    </div>
  );
}

export default Loading;
