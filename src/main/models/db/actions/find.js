//   window.api.receiveOnce('db:get', (data) => {
//     // console.log(`Received ${data} from main process`);
//     console.log(data);
//   });
//   window.api.send('db:operation', 'db:get', 'find', 'customers');
export const find = async ({
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
    tempReturnData.message = 'DB object not defined';
  } else {
    // when everything is satisfied
    let params = false;
    if (!extra) {
      params = {};
    } else {
      params =
        extra?.params && typeof extra?.params === 'object'
          ? extra?.params
          : false;
      tempReturnData.data = {
        passedParam: params,
      };
    }
    if (params && typeof params === 'object') {
      tempReturnData.data = {
        result: (await tempReturnData.db.find({ ...params })).map((_) => ({
          ..._,
          createdAt: new Date(_.createdAt).toISOString(),
          updatedAt: new Date(_.updatedAt).toISOString(),
        })),
      };
      tempReturnData.message = 'Success';
    } else {
      tempReturnData.error = 'Type of params is not type object';
    }
  }
  if (tempReturnData.db !== null) {
    delete tempReturnData.db;
  }
  return tempReturnData;
};

export const findOne = async ({
  extra = false,
  returnData = {
    data: false,
    message: false,
    db: false,
  },
}) => {
  const tempReturnData = {
    data: false,
    message: false,
    db: false,
    ...returnData,
  };
  if (tempReturnData.db !== null) {
    delete tempReturnData.db;
  }
  return {
    ...tempReturnData,
    error: 'findOne action is not defined',
  };
};
