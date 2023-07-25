import http from "./http";

export const initialData = {
  name: "",
  description: "",
  labelX: "",
  labelY: "",
  labelZ: "",
  lines: [{ label: "", color: "#000000", vertices: "" }],
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

export function deleteLineChart(id) {
  return http.delete("/plots/" + id);
}
