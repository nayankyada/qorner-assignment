import React from "react";
import Chart from "./Chart";
import ClipLoader from "react-spinners/ClipLoader";

function Revenue(props) {
  return (
    <div className="pt-12 font-encodeSans">
      <div className="px-4">
        <div>
          <p className="font-semibold text-sm">Revenue</p>
          <p className="text-xs font-normal text-gray-400">{props.date}</p>
        </div>
        <div>
          {props.isLoading ? (
            <div className="flex justify-center items-center"><ClipLoader color={"black"} loading={props.isLoading} size={30} /></div>
          ) : (
            <Chart
              title="Estimated Revenue"
              value="₹24.45"
              percent="+10%"
              unit="M"
              prefix="₹"
              suffix=""
              data={props.data?.revenueDetails?.estimatedRevenueTrend}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Revenue;
