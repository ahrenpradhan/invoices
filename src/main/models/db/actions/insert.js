//   window.api.receiveOnce('db:create', (data) => {
//     // console.log(`Received ${data} from main process`);
//     console.log(data);
//   });
//   window.api.send('db:operation', 'db:create', 'insert', 'customers', {data: <customerDataObj>});

export const insert = async ({
  extra = false,
  returnData = {
    data: false,
    message: false,
    db: false,
    error: false,
  },
}) => {
  const tempReturnData = {
    data: false,
    message: false,
    db: false,
    error: false,
    ...returnData,
  };
  if (!tempReturnData.db) {
    tempReturnData.error = 'DB object not defined';
  } else {
    // when everything is satisfied
    let data = false;
    // create data object
    if (!extra) {
      data = {};
    } else {
      data =
        extra?.data && typeof extra?.data === 'object' ? extra?.data : false;
      tempReturnData.data = {
        passedParam: data,
      };
    }
    // inserting data to DB if it's O.K.
    if (data && typeof data === 'object' && Object.keys(data).length > 0) {
      tempReturnData.data = await tempReturnData.db.insert({ ...data });
      tempReturnData.message = 'Success';
    } else {
      tempReturnData.error = 'Issue with data received';
    }
  }
  if (tempReturnData.db !== null) {
    delete tempReturnData.db;
  }
  console.log(tempReturnData);
  return tempReturnData;
};

export const temp = 'hahah';
