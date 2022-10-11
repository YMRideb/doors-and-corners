/*
Separation of concerns

Components only need to be concerned with receiving and rendering data,
they do not need to be concerned with how to make API calls

This service file is concerned with only how to make API calls to our API
and only returns the data

Combining a service file with the react-query package's useQuery hook 
is ideal for larger projects

*/

import axios from "axios";

//Normally the url would be saved in a.emv file or config file that is git ignored
//so it is easy to have a different url for production

const http = axios.create({
  baseURL: "http://localhost:8000/psf",
});

/*
we could also avoid repetition on '/resources' by adding it to the axios
base URL, but if there are other models we would need another axios instance
to change that part of the url.
*/

export const getAllResources = async () => {
  const res = await http.get("/resources");
  return res.data;
};
export const createResource = async (data) => {
  const res = await http.post(`resources`, data);
  return res.data;
};

export const getResourceById = async (id) => {
  const res = await http.get(`/resources/${id}`);
  return res.data;
};

export const deleteResourceById = async (id) => {
  const res = await http.delete(`/resources/${id}`);
  return res.data;
};

export const updateResourceById = async (id, data) => {
  const res = await http.put(`/resources/${id}`, data);
  return res.data;
};
