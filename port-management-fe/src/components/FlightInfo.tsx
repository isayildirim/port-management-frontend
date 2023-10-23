import { MdKeyboardArrowRight } from "react-icons/md";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TbPointFilled } from "react-icons/tb";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { FlightInfoResponse } from "../api/flightInfoResponse";

type Props = {
  flightInfo: FlightInfoResponse[] | undefined;
};

const FlightInfo: React.FC<Props> = (props) => {
  const { flightInfo } = props;

  return (
    <div className="flex items-center justify-center mt-3 flex flex-col mb-4">
      {flightInfo && flightInfo.map((info, index) => (
        <div key={index} className="h-36 w-11/12 bg-gray-100 rounded-xl flex flex-col mb-4">
          <div className="border-b-2 border-b-slate-300 flex flex-row items-center justify-between p-3">
            <div className="flex flex-row items-center justify-center">
              <p>{info.departureAirport}</p>
              <MdKeyboardArrowRight />
              <p>{info.arrivalAirport}</p>
            </div>
            <div className="flex items-center justify-center">
              <p className="font-bold text-md">{info.departureTime}</p>
              <div className="pr-1 pl-1">
                <HiArrowNarrowRight />
              </div>
              <p className="text-sm">{info.arrivalTime}</p>
            </div>
            <div className="flex flex-col text-right">
              <p className="font-bold">
                {info.price}
              </p>
              <p className="text-[13px]">Toplam {info.price}</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start p-3">
            <div className="pr-3">
              <p className="text-red-600">
                {info.hasStop ? "Aktarmalı" : "Aktarmasız"}
              </p>
            </div>
            <div className="pr-3 text-gray-400">
              <TbPointFilled />
            </div>
            <div className="flex items-center justify-center text-gray-800">
              <FaCartFlatbedSuitcase />
              <p className="pl-2">{info.baggageAllowance} kg/kişi</p>
            </div>
          </div>
        </div>
      ))
      }
    </div>
  );
};

export default FlightInfo;
