export const changePosition = (state = {}, action) => {
      switch (action.type) {
            case 'MOVE':
                  return {
                        x: Math.floor(Math.random() * 1000),
                        y: Math.floor(Math.random() * 500)
                  }
            default: return state;
      }
}