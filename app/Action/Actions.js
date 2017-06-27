export const move = () => {
      return {
         type: "MOVE",
         x: Math.floor(Math.random() * (10 - 1)) + 1,
         y: Math.floor(Math.random() * (10 - 1)) + 1,
         isRabbitDead:false
      }
   }
export const addHunter = (name="",gender="Male",accuracy=0) => ({
         type: "ADD_HUNTER",
         hunter: {name:name,
         	      gender:gender,
                  accuracy:accuracy}
   });
const hunterFire = (accuracy="0",x=0,y=0) => {
      let isDead=false;
      let shootX=Math.floor(Math.random() * (10 - 1)) + 1;
      let shootY=Math.floor(Math.random() * (10 - 1)) + 1;
      if (accuracy>=50){
         shootX=x;
         if(accuracy>=90){
            shootY=y;
         }
      }
      if(shootX===x && shootY===y)isDead=true;
      return {
         type: "FIRE",
         isDead: isDead
      } 
}
export const fire = (accuracy="0") => {
   return (dispatch, getState)=>{
      const {rabbit} = getState();
      Promise.resolve(dispatch(hunterFire(accuracy,rabbit.x,rabbit.y)))
      .then(() => {
         const {rabbit} = getState();
         if (!rabbit.isRabbitDead) {dispatch(move());};
      });
   }
}