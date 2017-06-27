export function rabbit(state = {
    x : 0,
    y : 0,
    hunters : [{name:"John",gender:"Male",accuracy:"0"},{name:"Tiffany",gender:"Female",accuracy:"77"}],
    isRabbitDead:false
}, action) {
   switch(action.type) {
      case "MOVE":
         return Object.assign({}, state,{
            x : action.x,
            y : action.y,
            isRabbitDead:action.isRabbitDead
         });
      case "ADD_HUNTER":
         return Object.assign({}, state,{
            hunters : [...state.hunters, action.hunter]
         });
      case "FIRE":
         return Object.assign({}, state,{
            isRabbitDead : action.isDead
         });
      default:
         return state;
   }
}