export const addFolder = (element) => {
  return {
    type: "CREATE_FOLDER",
    payload: element,
  };
};
export const addFile = (element) => {
  return {
    type: "CREATE_FILE",
    payload: element,
  };
};

export const renameEntity = (element, index) => {
  console.log("entering");
  return {
    type: "RENAME_ENTITY",
    payload: { ...element, index },
  };
};

export const duplicateEntity = (element, index) => {
  return {
    type: "DUPLICATE_ENTITY",
    payload: { ...element, index },
  };
};
export const deleteEntity = (element, index) => {
  return {
    type: "DELETE_ENTITY",
    payload: { ...element, index },
  };
};
