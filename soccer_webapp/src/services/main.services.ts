import axios from "axios";

export const fetchDataSvc = async (data_param: string) => {
  const response = await axios.get(
    `https://soccer.miarajoris.com/stat/equip${data_param}`
  );
  return response.data;
};
