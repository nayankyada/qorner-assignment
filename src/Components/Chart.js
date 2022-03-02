import React from "react";
import Info from "../images/info.svg";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";
import moment from "moment";
function ABCY(props) {
  const { x, y, stroke, payload, prefix, suffix } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text dx={-30} dy={5} className="font-bold text-10">
        {prefix + payload.value + suffix}
      </text>
    </g>
  );
}

function ABCX(props) {
  const { x, y, stroke, payload, value } = props;
  console.log(payload.value);

  return (
    <g transform={`translate(${x},${y})`}>
      <text dy={15} dx={-12} className="font-bold text-10">
        {moment(payload.value).format("MMM") +
          " " +
          moment(payload.value).format("D")}
      </text>
    </g>
  );
}
const renderLegend = (props) => {
  const { payload } = props;
  console.log(props);
  return (
    <div className="flex justify-center items-center pl-8 pt-2 space-x-2">
      {payload.map((entry, index) => (
        <div className="flex space-x-1 items-center">
          <div className="p-1 rounded-full" style={{backgroundColor:entry.color}}></div>
          <p key={`item-${index}`} style={{color:entry.color}}>{entry.value}</p>
        </div>
      ))}
    </div>
  );
};
function Chart(props) {
  return (
    <div className="font-encodeSans shadow-lg py-4 rounded-b-xl border-2-gray">
      <div className="py-2 pl-4">
        <p className="text-10 font-semibold text-gray-400">{props.title}</p>
        <div className=" flex items-baseline">
          <p className="text-24 font-semibold">{props.data?.change?.value}</p>
          <p
            className={` ${
              props.unit === "lac" ? "font-medium" : "text-24 font-semibold"
            }`}
          >
            {props.unit}
          </p>
        </div>
        <div className="flex space-x-1 items-center">
          <p
            className={`text-10 font-bold ${
              props.data?.change?.percentage > 0
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {props.data?.change?.percentage + "%"}{" "}
          </p>
          <div className="group">
            <div className="relative ">
              <img src={Info}></img>
            </div>
            <p className="absolute group-hover:visible invisible text-10 px-2 py-1 rounded-md bg-green-50 ">
              {" "}
              {props.data?.change?.info}
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="pb-4 ">
        <ResponsiveContainer width={350} height={250}>
          <LineChart
            data={props.data.data}
            margin={{ left: -10, right: 35, top: 40 }}
          >
            <CartesianGrid vertical={false} />

            <XAxis axisLine={false} dataKey="date" tick={<ABCX />} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={<ABCY prefix={props.prefix} suffix={props.suffix} />}
            />
            <Line
              type="linear"
              dataKey="value1"
              dot={false}
              stroke="#31E498"
              strokeWidth={3}
              name={props.data.dataFieldMapping["value1"]}
            />
            {props.data.dataFieldMapping["value2"] && (
              <Line
                type="linear"
                dataKey="value2"
                dot={false}
                stroke="#FF5C00"
                strokeWidth={3}
                name={props.data.dataFieldMapping["value2"]}
              />
            )}
            <Legend iconType={"circle"} iconSize={8} margin={{right:-30}} content={renderLegend} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;
