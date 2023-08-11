export default class EventBus {
    constructor() {
        this.eventMap = {};
    }
    on(eventName, callback) {
        this.eventMap[eventName] = callback
    }
    emit(eventName, ...args) {
        this.eventMap[eventName] && this.eventMap[eventName](...args)
    }
}
