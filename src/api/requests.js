import { saveAs } from "file-saver";

export const saveFile = async (data, filename) => {
  fetch("http://localhost:5000/save-answers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data, filename }),
  })
    .then((response) => {
      console.log(response.json());
    })
    .catch((error) => {
      console.error("There was an error saving the answers!", error);
    });
};

export const downloadFile = async (data, filename) => {
  const blob = new Blob([JSON.stringify(data)], {
    type: "application/json",
  });
  saveAs(blob, filename);
};
