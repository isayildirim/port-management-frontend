import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsFillCalendarEventFill } from "react-icons/bs";

const DateInput = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <div className="flex items-center justify-center pr-2 h-full">
      <div className="absolute z-10 px-[80px] pr-8">
        <div className="absolute -mt-3 ">
          <BsFillCalendarEventFill />
        </div>
      </div>
      <div className="flex items-end justify-end">
        <div className="bg-blue-950 ">
          <div>
            <label className="relative block cursor-text w-full group">
              <DatePicker
                className="bg-blue-950 border border-none z-50 w-28 h-12 text-white  text-xs pl-2 cursor-pointer peer placeholder:text-gray-100 placeholder:text-[15px] "
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Tarih"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateInput;
