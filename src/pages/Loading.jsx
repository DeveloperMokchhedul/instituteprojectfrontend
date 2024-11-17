import React from "react";

function Loading() {
  return (
    <div className="flex mt-[140px]  justify-center min-h-screen bg-white">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex flex-row space-x-4">
            <div
              className="w-12 h-12 rounded-full animate-spin
                    border-y border-dashed border-yellow-500 border-t-transparent"
            ></div>

            <div
              className="w-12 h-12 rounded-full animate-spin
                    border-y-2 border-dashed border-blue-500 border-t-transparent"
            ></div>

            <div
              className="w-12 h-12 rounded-full animate-spin
                    border-y-4 border-dashed border-green-500 border-t-transparent"
            ></div>

            <div
              className="w-12 h-12 rounded-full animate-spin
                    border-y-8 border-dashed border-purple-500 border-t-transparent"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
