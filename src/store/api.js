import axios from 'axios';

const API_KEY = '64eef95952be5ca3b5f81273bd0947e3';
const API_TOKEN = '2a2f9734ac85941e66db8d569e437ed05e055ef3016e6c10b0730d8ae8f8b70b';
const ID_LIST = '5a61fe8d378e2ab995014af1';
const CARD_NAME = 'test card';

const authUrlParams = `key=${API_KEY}&token=${API_TOKEN}`;
const baseURL = 'https://api.trello.com/1';

export const api = axios.create({
  baseURL,
  timeout: 25000,
});

export const createCardRequest = (commentValue) =>
  api.post(`/cards?${authUrlParams}&idList=${ID_LIST}&name=${CARD_NAME}&desc=${commentValue}`);

export const addAttachmentRequest = (data, idCard) =>
  api.post(`/cards/${idCard}/attachments?${authUrlParams}`, data);