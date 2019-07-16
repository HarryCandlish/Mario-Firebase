const initialState = {
  projects: [
    { id: "1", title: "help me find peace", content: "blah" },
    { id: "2", title: "help me find happiness", content: "blah" },
    { id: "3", title: "help me find God", content: "blah" }
  ]
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create projects error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
