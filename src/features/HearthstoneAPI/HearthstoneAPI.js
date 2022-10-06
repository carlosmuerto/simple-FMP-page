/* eslint-disable no-promise-executor-return */
import axios from 'axios';

const BASEURL = 'https://omgvamp-hearthstone-v1.p.rapidapi.com';

const options = {
  headers: {
    'X-RapidAPI-Key': '4a70cf70f3msh9a451edd06d6b94p1d2b7ajsna87e3f016c9c',
    'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
  },
};

const fetchInfo = async () => (await axios.get(`${BASEURL}/info`, options)).data;

const fetchBy = async (category, entry) => (await axios.get(`${BASEURL}/cards/${category}/${entry}`, options)).data;

const fetchACard = async (cardIdOrName) => (await axios.get(`${BASEURL}/cards/${cardIdOrName}`, options)).data;

const fetchbySearch = async (partialName) => (await axios.get(`${BASEURL}/cards/search/${partialName}`, options)).data;

const HearthstoneAPI = {
  fetchInfo,
  fetchBy,
  fetchACard,
  fetchbySearch,
};

export default HearthstoneAPI;
