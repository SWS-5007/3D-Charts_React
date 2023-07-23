export function verticesToString(vertices) {
  let str = "";
  for (let vertex of vertices)
    str += `(${vertex[0]}, ${vertex[1]}, ${vertex[2]}), `;

  return str;
}

export function handleCreateVertices(verticesString) {
  verticesString += ",";

  const splittedString = verticesString
    .split(",")
    .filter((value) => value !== " " && value !== "")
    .map((value) => value.trim());

  let count = 0;
  const vertices = [];
  const vertex = [0, 0, 0];

  for (let value of splittedString) {
    let parsed = parseFloat(value);
    if (isNaN(parsed)) parsed = value;
    vertex[count] = parsed;
    count++;

    if (count === 3) {
      vertices.push(vertex);
      vertex = [0, 0, 0];
      count = 0;
    }
  }

  if (count > 0) vertices.push(vertex);

  return vertices;
}
