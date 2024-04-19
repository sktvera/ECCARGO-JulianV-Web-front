import axios from "axios";

const urlApi = 'https://53tl8opix6.execute-api.us-east-2.amazonaws.com/test/';

export function sendImageS3(imageS3) {
  return axios.post(`${urlApi}saveImage`, imageS3);
}

export function getImagesS3() {
  return  axios.get(`${urlApi}getImages`);
}

export function deleteImage(imageS3) {
  return  axios.delete(`${urlApi}deleteImage/${imageS3}`) 
}
