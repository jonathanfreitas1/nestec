class Tasks {
    constructor() {
        this.id = 1;
        this.arrayTasks = []
    }

    salvar() {
        let task = this.lerDados();
        
    }

    lerDados() {
        let task = {}

        task.id = this.id;
        task.name = document.getElementById('task').value;

        return task;
    }

    adicionar(task) {
        this.arrayTasks.push(task);
    }
}