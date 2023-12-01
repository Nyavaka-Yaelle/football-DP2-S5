export const fetchDataSvc = async (data_param: string) => {
  const response = await fetch(
    `http://soccer.miarajoris.com/stat/equip${data_param}`
  );
  //   console.log(response);
  return response.json();
};
