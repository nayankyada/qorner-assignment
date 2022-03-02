import React from "react";
import { ClipLoader } from "react-spinners";
import Chart from "./Chart";

function Reach(props) {
  return (
    <div className="pt-12 font-encodeSans">
      <div className="px-4">
        <div>
          <p className="font-semibold text-sm">Reach & engagement</p>
          <p className="text-xs font-normal text-gray-400">{props.date}</p>
        </div>
        <div>
          {props.isLoading ? (
            <div className="flex justify-center items-center"><ClipLoader color={"black"} loading={props.isLoading} size={30} /></div>
          ) : (
            <Chart
              title="Views"
              value="100.56"
              percent="+10%"
              unit="M"
              prefix=""
              suffix="M"
              data={props.data?.reachAndEngagementDetails?.viewsTrend}
              isLoading={props.isLoading}

            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Reach;
