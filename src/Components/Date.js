import React, { useEffect, useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateRangePicker from "@mui/lab/DateRangePicker";
function Date(props) {
  
  
  return (
    <div className="pt-12 font-encodeSans">
      <div className="flex justify-between items-center px-4">
        <div>
          <p className="font-semibold text-sm">Summary</p>
          <p className="text-10 font-normal text-gray-400">{props.date}</p>
        </div>
        <div>
          <div className="px-1 py-1 font-medium text-10  border-2 text-gray-800 rounded-full">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateRangePicker
                label="Advanced keyboard"
                value={props.value}
                onChange={(newValue) => props.setValue(newValue)}
                onAccept={() => {props.setUpdatedDate(props.value)}}
                renderInput={(startProps, endProps) => (
                  <React.Fragment>
                    <input
                      className="w-14 outline-none text-10"
                      ref={startProps.inputRef}
                      {...startProps.inputProps}
                    />
                    <p className="pl-2">to</p>
                    <input
                      className="pl-2 w-16 outline-none"
                      ref={endProps.inputRef}
                      {...endProps.inputProps}
                    />{" "}
                  </React.Fragment>
                )}
              />
            </LocalizationProvider>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Date;
