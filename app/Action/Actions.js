export const move = () => {
      return {
         type: "MOVE",
         x: Math.floor(Math.random() * (10 - 1)) + 1,
         y: Math.floor(Math.random() * (10 - 1)) + 1
      }
   }
export const addHunter = (name,gender) => {
      return {
         type: "ADD_HUNTER",
         hunter: {name:name,
         	gender:gender}
      }
   }