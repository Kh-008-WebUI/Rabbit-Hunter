export function rabbit(state = {
    x : 0,
    y : 0,
    hunters : [{name:"John",gender:"Male"}]
}, action) {
   switch(action.type) {
      case "MOVE":
         return Object.assign({}, state,{
            x : action.x,
            y : action.y
         });
      case "ADD_HUNTER":
        let huntersTemp = state.hunters;
        huntersTemp.push(action.hunter);
         return Object.assign({}, state,{
            hunters : huntersTemp
      });
      default:
         return state;
   }
}