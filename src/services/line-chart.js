import http from "./http";

export const initialData = {
  name: "",
  description: "",
  labelsX: "",
  labelsY: "",
  labelsZ: "",
  lines: [{ label: "", color: "", vertices: "" }],
};

export function getLineCharts() {
  return http.get("/plots/");
}

export function getLineChart(id) {
  return http.get(`/plots/${id}`);
}

export function createLineChart(data) {
  return http.post("/plots/", data);
}

export function updateLineChart(id, data) {
  return http.put("/plots/" + id, data);
}

export function deletePieChart(id) {
  return http.delete("/plots/" + id);
}
