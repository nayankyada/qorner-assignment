import React, { useEffect, useState } from "react";
import Audience from "./Components/Audience";
import Date from "./Components/Date";
import Header from "./Components/Header";
import Reach from "./Components/Reach";
import Revenue from "./Components/Revenue";
import State from "./Components/State";
import "./style/index.css";
import moment from "moment";
function App() {
  const [date, setDate] = React.useState([
    moment("2021-01-01"),
    moment("2021-01-31"),
  ]);
  const [updatedDate,setUpdatedDate] = useState([
    moment("2021-01-01"),
    moment("2021-01-31"),
  ])
  const [renderDate, setRenderDate] = useState("");
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let str = ""
      
    if(date[0] && date[1]){
      str = moment(date[0]).format("MMM") +
      " " +
      moment(date[0]).format("D") +
      " - " +
      moment(date[1]).format("MMM") +
      " " +
      moment(date[1]).format("D") +
      ", " +
      moment(date[0]).format("YYYY") +
      " " +
      moment(date[1]).format("YYYY");
    }
    
    setRenderDate(str);
    setIsLoading(true)
    fetch(
      `https://qorner-mock-server.herokuapp.com/stats?startDate=${moment(
        date[0]
      ).format("YYYY-MM-DD")}&endDate=${moment(date[1]).format("YYYY-MM-DD")}`
    )
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setIsError(false);
        console.log(d);
      })
      .catch((e) => {
        console.log(e);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [updatedDate]);
  useEffect(() => {
    fetch(
      `https://qorner-mock-server.herokuapp.com/stats?startDate=${moment(
        date[0]
      ).format("YYYY-MM-DD")}&endDate=${moment(date[1]).format("YYYY-MM-DD")}`
    )
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setIsError(false);
        console.log(d);
      })
      .catch((e) => {
        console.log(e);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="pb-8">
      <Header />
      <Date setValue={setDate} value={date} date={renderDate} setUpdatedDate={setUpdatedDate}/>
      {isError ? (
        <div className="px-4 mt-8 flex justify-center items-center font-encodeSans" >
          
          <p className="p-4 shadow-xl rounded-2xl text-red-400">Custom Error Message</p>
        </div>
      ) : (
        <div>
          <State date={date} data={data} isLoading={isLoading} />
          <Revenue data={data} date={renderDate} isLoading={isLoading} />
          <Reach data={data} date={renderDate} isLoading={isLoading} />
          <Audience data={data} date={renderDate} isLoading={isLoading} />
        </div>
      )}
    </div>
  );
}

export default App;
