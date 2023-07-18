export type itineraryType = {
  DeptHour: string;
  ArrHour: string;
  Duration: number;
  DeptCity: string;
  ArrCity: string;
  DeptDate: string;
  ArrDate: string;
  initPrice: number;
  bus: busType;
};

export type seatType = {
  number: number;
  // type: string;
  isRes: boolean;
};

export type busType = {
  seats: seatType[];
  type: string;
};

export type dataType = {
  itinerary: itineraryType;
};

const dummy: dataType = {
  itinerary: {
    DeptHour: "10:30",
    ArrHour: "13:30",
    Duration: 2,
    DeptCity: "Thessaloniki",
    ArrCity: "Florina",
    DeptDate: "29/03/2023",
    ArrDate: "29/03/2023",
    initPrice: 25.7,
    bus: {
      seats: [
        { number: 1, isRes: false },
        { number: 2, isRes: false },
        { number: 3, isRes: false },
        { number: 4, isRes: false },
        { number: 5, isRes: false },
        { number: 6, isRes: false },
        { number: 7, isRes: false },
        { number: 8, isRes: false },
        { number: 9, isRes: true },
        { number: 10, isRes: true },
        { number: 11, isRes: true },
        { number: 12, isRes: true },
        { number: 13, isRes: true },
        { number: 14, isRes: false },
        { number: 15, isRes: false },
        { number: 16, isRes: false },
        { number: 17, isRes: false },
        { number: 18, isRes: false },
        { number: 19, isRes: false },
        { number: 20, isRes: false },
        { number: 21, isRes: false },
        { number: 22, isRes: false },
        { number: 23, isRes: false },
        { number: 24, isRes: true },
        { number: 25, isRes: true },
        { number: 26, isRes: true },
        { number: 27, isRes: true },
        { number: 28, isRes: true },
        { number: 29, isRes: false },
        { number: 30, isRes: false },
        { number: 31, isRes: false },
        { number: 32, isRes: false },
        { number: 33, isRes: false },
        { number: 34, isRes: false },
        { number: 35, isRes: false },
        { number: 36, isRes: false },
        { number: 37, isRes: false },
        { number: 38, isRes: false },
        { number: 39, isRes: false },
        { number: 40, isRes: false },
        { number: 41, isRes: false },
        { number: 42, isRes: false },
        { number: 43, isRes: true },
        { number: 44, isRes: false },
        { number: 45, isRes: false },
        { number: 46, isRes: false },
        { number: 47, isRes: false },
        { number: 48, isRes: false },
        { number: 49, isRes: false },
        { number: 50, isRes: false },
        { number: 51, isRes: true },
        { number: 52, isRes: false },
        { number: 53, isRes: false },
        { number: 54, isRes: false },
        { number: 55, isRes: false },
        { number: 56, isRes: false },
        { number: 57, isRes: false },
        { number: 58, isRes: false },
        { number: 59, isRes: false },
        { number: 59, isRes: false },
        { number: 60, isRes: false },
      ],
      type: "large",
    },
  },
};

export default dummy;
