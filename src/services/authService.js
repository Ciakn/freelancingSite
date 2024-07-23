import http from "./httpServices";

export function getOtp(data) {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
}
export function checkOtp(data) {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
}
export function CompleteProfile(data) {
  return http.post("/user/complete-profile", data).then(({ data }) => data.data);
}
export function getUser(data) {
  return http
    .post("/user/profile", data)
    .then(({ data }) => data.data);
}
