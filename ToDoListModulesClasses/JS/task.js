export default class Task {
    constructor(name, completed = false) {
        this.name = name;
        this.completed = completed;
        this.id = Date.now()
    }
    toggleCompleted() {
        this.completed = !this.completed 
        // if (this.completed == true) this.completed = false;
        // else {this.completed = true}
        return this.completed
    }   
}

