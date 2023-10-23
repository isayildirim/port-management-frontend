import { PiAirplaneLandingFill, PiAirplaneTakeoffFill } from "react-icons/pi";
import { GiPerson } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useState } from "react";
import DateInput from "./DateInput";
import FlightInfo from "./FlightInfo";
import Input from "./Input";
import { getFlightInfo } from "../api/portClient";
import { FlightInfoRequest, FlightInfoResponse } from "../api/flightInfoResponse";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SearchAirpot = () => {
  const [person, setPerson] = useState(1);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [flightInfo, setFlightInfo] = useState<FlightInfoResponse[]>();

  const handleIncrement = (e: React.MouseEvent) => {
    e.preventDefault();
    setPerson(person + 1);
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.preventDefault();
    person > 1 ? setPerson(person - 1) : setPerson(1);
  };

  const handleClick = () => {
    const flightInfoReq: FlightInfoRequest = {
      from: localStorage.getItem("from")!,
      to: localStorage.getItem("to")!
    };
    getFlightInfo(flightInfoReq).then((response) => {
      setFlightInfo(response.data);
    });
    toast("Any results not found!");
  }

  function setInputValue() {
    setFrom(localStorage.getItem("from")!);
    setTo(localStorage.getItem("to")!);
  }

  return (
    <div>
      <form className="flex items-center justify-between h-[75px] p-3 bg-gray-400/60">
        <div className="flex flex-row w-full  ">

          <div className="flex items-center w-36 bg-white h-12 hover:border-2 hover:border-red-500 transition duration-500">
            <div className="text-2xl p-1 mr-2">
              <PiAirplaneTakeoffFill />
            </div>
            <Input
              text="Nereden"
              type="text"
              onChange={setInputValue}
              selection="from"
            />
          </div>

          <div className="flex items-center w-36 bg-white h-12 ml-2 hover:border-2 hover:border-red-500 transition duration-500">
            <div className="text-2xl p-1 mr-2">
              <PiAirplaneLandingFill />
            </div>
            <div>
              <Input
                text="Nereye"
                type="text"
                onChange={setInputValue}
                selection="to"
              />
            </div>
          </div>

          <div className="flex w-28 ml-2 h-12 text-white items-center justify-between">
            <div className="text-2xl text-gray-500 outline-none">
              <DateInput />
            </div>
          </div>

          <div className="flex flex-col ml-2 w-24 h-12 bg-blue-950">
            <div className="flex justify-end">
              <div className="flex items-center justify-center">
                <div className="text-red-500 mr-1">
                  <button onClick={handleDecrement}>
                    <AiFillMinusCircle />
                  </button>
                </div>

                <h1 className=" text-white mr-1">
                  {person}
                </h1>
                <div className="text-red-500 mr-1">
                  <button onClick={handleIncrement}>
                    <AiFillPlusCircle />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex  items-end justify-center text-2xl h-12 text-gray-500">
              <div className="mb-7 ">
                <GiPerson />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center ml-2 w-8 text-3xl h-12 text-white bg-red-500">
            <button type="button" className="btn btn-primary" onClick={handleClick}>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </form>
      <div className="mt-10  max-h-[328px] overflow-auto pb-4">
        <FlightInfo flightInfo={flightInfo} />
        {!flightInfo || flightInfo.length < 1 ? <ToastContainer /> : ""}
      </div>
    </div>
  );
};

export default SearchAirpot;
