const INVENTORY = "INVENTORY";

const initialState = {
  inventory: []
};

export default function inventory(state = initialState, action) {
  switch (action.type) {
    case INVENTORY:
      return true
    default:
      return state
  }
}
