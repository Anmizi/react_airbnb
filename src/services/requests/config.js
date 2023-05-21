export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://codercba.com:1888/airbnb/api"
    : "/api";
export const TIMEOUT = 10000;
