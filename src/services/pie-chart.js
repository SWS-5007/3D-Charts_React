import http from "./http";

export const initialData = {
  name: "",
  description: "",
  values: [{ label: "", color: "", value: "" }],
};

export function createPieChart(data) {
  return http.post("/pies/", data);
}

export function getPieCharts() {
  return http.get("/pies/");
}

export function getPieChart(id) {
  return http.get("/pies/" + id);
}
