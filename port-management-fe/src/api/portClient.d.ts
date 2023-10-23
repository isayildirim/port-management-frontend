import {AirportInfoResponse } from "./airportInfoResponse";
import { FlightInfoRequest, FlightInfoResponse } from "./flightInfoResponse";

declare module 'portClient' {
    export function getAirportInfo(airportCode: string): Promise<AirportInfoResponse>;
    export function postFlightInfo(request: FlightInfoRequest): Promise<FlightInfoResponse>;
}
  