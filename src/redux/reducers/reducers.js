export const mathReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD_NUMBER":
      return state + 1;
    case "SUBSTRACT_NUMBER":
      return state - 1;
    default:
      return state;
  }
};

export const españolReducer = (
  state = { materia: "español", alumnos: 20 },
  action
) => {
  switch (action.type) {
    case "ADD_NUMBER":
      return state + 1;
    case "SUBSTRACT_NUMBER":
      return state - 1;
    default:
      return state;
  }
};
