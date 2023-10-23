import axios from "axios";
import { FlightInfoRequest } from "./flightInfoResponse";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/v1"
});

export const getAirportInfo = (airpotValue:String) => {
    return instance.get(`/flight/${airpotValue}`);
  };
  
export const getFlightInfo = (request:FlightInfoRequest | undefined) => {
    return instance.post(`/flight-info`, request);
};