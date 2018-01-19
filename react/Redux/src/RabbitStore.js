/*export default class RabbitStore {
      constructor(dispatcher) {
            this.dispatcher = dispatcher;
            this.position = [0, 0];
            this.hunters = [];
            this.dispatcher.register(
                  (payload) => {
                        switch (payload.type) {
                              case "MOVE":
                                    this.position = this.position.map((elem) => elem = Math.floor(Math.random() * 350));
                                    this.updateHunters();
                                    break;
                        }
                  }
            );
      }
      addHunter(callback) {
            this.hunters.push(callback);
      }
      removeHunter(callback) {
            let index = this.views.indexOf(callback);
            this.hunters.splice(index, 1);
      }
      updateHunters() {
            this.hunters.map(
                  (callback) => callback()
            );
      }
}*/