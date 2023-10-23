export interface FlightInfoResponse {
    departureAirport: string;
    arrivalAirport: string;
    arrivalTime: string;
    departureTime: string;
    baggageAllowance: number;
    price: string;
    hasStop: boolean;
}             

export interface FlightInfoRequest {
    from: string;
    to: string;
}