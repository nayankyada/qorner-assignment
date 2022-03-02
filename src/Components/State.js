import React from "react";
import { ClipLoader } from "react-spinners";

function State(props) {
  return (
    <div className="py-4 px-6 font-encodeSans">
      <div className="flex justify-between items-center pb-6 pt-4 px-4 shadow-lg rounded-xl	">
        {props.isLoading
          ? <div className="flex justify-center m-auto items-center"><ClipLoader color={"black"} loading={props.isLoading} size={30} /></div>
          : Object.keys(props.data?.summary).map((d,i) => (
              <div>
                <p className="text-gray-400 font-semibold text-10">{d}</p>
                <div className="flex items-center justify-start">
                  <p className="font-bold">{props.data.summary[d]}</p>
                  <p
                    className={`${
                      i === 2 ? "font-medium" : "font-semibold"
                    }`}
                  >
                    {i === 2 ? "lac":"M"}
                  </p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default State;
