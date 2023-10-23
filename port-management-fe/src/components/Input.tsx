import React, { useState } from "react";
import { MdFlight } from "react-icons/md";
import { getAirportInfo } from "../api/portClient";
import { AirportInfoResponse } from "../api/airportInfoResponse";

type Props = {
  type: string;
  text: string;
  onChange: any;
  selection: string;
};

const Input: React.FC<Props> = (props) => {
  const { type, text, selection } = props;
  const [value, setValue] = useState("");
  const [isOpenSelection, setIsOpenSelection] = useState(false);
  const [data, setData] = useState<AirportInfoResponse[]>();

  const onChangeAirportInput = (value: string) => {
    getAirportInfo(value).then((response) => {
      setData(response.data);
    });

  }

  function isValid(value: string): boolean {
    return value.length >= 3;
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isValid(e.target.value)) {
      setIsOpenSelection(true);
      onChangeAirportInput(e.target.value);
      setInputValue(e.target.value);
    } else {
      setData([]);
      setValue("");
    }
  };

  const setInputValue = (value: string) => {
    selection === "from" ? localStorage.setItem('from', value) : localStorage.setItem('to', value);
  }

  const handleClick = (airport: AirportInfoResponse) => {
    setValue(`${airport.city}, ${airport.code}`);
    setIsOpenSelection(false);
  }

  return (
    <div className="h-11 w-full">
      <label className="relative block cursor-text w-full">
        <input
          type={type}
          className="h-11 w-full border outline-none px-4 peer"
          onChange={(e) => handleSearch(e)}
          required
          placeholder={text}
        />

        <span className="absolute top-0 left-0 px-4 text-sm flex items-center h-full peer-focus:h-5 peer-focus:text-[11px] peer-valid:h-5 peer-valid:text-xs transition-all">
          {value}
        </span>
        {data && data.length > 0 && isOpenSelection && (
          <div className="">
            <div className="absolute w-64 top-[50px] p-2 bg-white -left-10  flex flex-col gap-2">
              {data.map((airport) => (
                <button className="h-11 w-full flex items-center border-b-[1px] " key={airport.code} onClick={() => handleClick(airport)}>
                  <div className="h-full text-2xl p-1 mr-2 flex items-center justify-center  ">
                    <MdFlight />
                  </div>
                  <div className="h-full w-full flex items-center justify-between ">
                    <div>
                      <div>
                        <p className="text-gray-900 text-sm">{`${airport.city}, ${airport.country}`}</p>
                      </div>
                      <div>
                        <p className="text-gray-900 text-sm">
                          {airport.name}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-900 text-sm">{airport.code}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </label>
    </div>
  );
};

export default Input;
