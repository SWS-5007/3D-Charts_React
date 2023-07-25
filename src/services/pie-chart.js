import http from "./http";

export const initialData = {
  name: "",
  description: "",
  values: [{ label: "", color: "", value: "" }],
};

export function createPieChart(data) {
  return http.post("/pies/", data);
}

export function updatePieChart(id, data) {
  return http.put("/pies/" + id, data);
}

export function getPieCharts() {
  return http.get("/pies/");
}

export function getPieChart(id) {
  return http.get("/pies/" + id);
}

export function deletePieChart(id) {
  return http.delete("/pies/" + id);
}
