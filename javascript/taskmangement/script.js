const tasks = [
    {
        id: 1,
        taskName: "Watch Movie",
        status: "InComplete"
    },
    {
        id: 2,
        taskName: "Watch Insta",
        status: "Complete"
    }
];





function renderTasks() {
    document.getElementById("tasksRows").innerHTML = tasks
        .map((elmt, i) => `
            <tr>
                <td scope="col">${i + 1}</td>
                <td scope="col">${elmt.taskName}</td>
                <td scope="col">${elmt.status}</td>
                <td scope="col">
                    <button 
                        class="btn btn-success" 
                        onclick="updateStatus(${elmt.id})">
                        Update Status
                    </button>

                    <button 
                        class="btn btn-danger" 
                        onclick="deleteTask(${elmt.id})">
                        Delete Task
                    </button>
                </td>
            </tr>
        `)
        .join('');
}


function addNewTask() {

    newTaskName = document.getElementById("inputTask").value;

    newTaskObj = {
        taskName: newTaskName,
        status: "InComplete",
        id: Date.now()
    };

    console.log(newTaskObj);

    tasks.push(newTaskObj);

    console.log(tasks);

    renderTasks();
    dashboardStats();
}


document.getElementById("addBTN").addEventListener("click", addNewTask);


function deleteTask(ID) {

    indexNum = tasks.findIndex((t) => t.id == ID);

    tasks.splice(indexNum, 1);

    renderTasks();
    dashboardStats();
}


function updateStatus(ID) {

    indexNum = tasks.findIndex((t) => t.id == ID);

    console.log("---------------------");
    console.log(tasks[indexNum]);

    if (tasks[indexNum].status == "Complete") {
        tasks[indexNum].status = "InComplete";
    } else {
        tasks[indexNum].status = "Complete";
    }

    renderTasks();
    dashboardStats();
}


function dashboardStats() {

    totalTasks = tasks.length;

    document.getElementById("TotalTasksCount").textContent = totalTasks;


    CompleteTasksCount = (
        tasks.filter(e => e.status == "Complete")
    ).length;

    document.getElementById("CompleteTasksCount").textContent =
        CompleteTasksCount;


    InCompleteTasksCount = (
        tasks.filter(e => e.status == "InComplete")
    ).length;

    document.getElementById("InCompleteTasksCount").textContent =
        InCompleteTasksCount;
}


renderTasks();
dashboardStats();