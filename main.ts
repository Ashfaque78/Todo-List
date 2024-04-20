#! /user/bin/env node

import inquirer from "inquirer";

let todoList: string [] = [];

let conditions = true;

console.log("<<<*** Welcome To My Simple Todo List App ***>>>")

let main = async () => {
    while (conditions){
        let option = await inquirer.prompt(
            [
                {
                    name:'choices',
                    type:'list',
                    message:("Select an option you want to add in your todo list:"),
                    choices:["Add Task","Delete Task","Update Task","View Todo List","Exit"],

                }
            ]
        );

        if (option.choices === "Add Task"){
            await addTask()
        }
        else if (option.choices === "Delete Task"){
            await deleteTask()
        }
        else if (option.choices === "Update Task"){
            await updateTask()
        }
        else if (option.choices === "View Todo List"){
            await viewTask()
        }
        else if (option.choices === "Exit"){
            conditions = false;
        }
    }
    }

    let addTask = async () => {
        let newTask = await inquirer.prompt(
            [
                {
                    name:'task',
                    type:'input',
                    message:"Enter New Task: ",
                }
            ]
        );

        todoList.push(newTask.task);
        console.log(`\n ${newTask.task} Task successfully added in your Todo List\n`);
    }

    let viewTask = () => {
        console.log("<<<*** My Todo List***>>>");

        todoList.forEach((task, index) =>{
            console.log(`${index + 1}: ${task}`)
        }
        )
    }

    let deleteTask = async () => {
        await viewTask()
        let taskIndex = await inquirer.prompt(
            [
                {
                    name:'index',
                    type:'number',
                    message:("Enter the 'index number. ' of the task you want to delete: "),
                }
            ]
        );

        let deleteTask = todoList.splice(taskIndex.index - 1, 1);
        console.log(`\n ${deleteTask}Task has been deleted from your Todo List\n`);
    }
    let updateTask = async () => {

    await viewTask()
    let update_Task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message:("Enter the 'index number.' of the task you want to update: ")
        },
        {
            name: "new_task",
            type: "input",
            message:("Now Enter new task name: "),
        }
    ]);
    todoList[update_Task_index.index - 1] = update_Task_index.new_task
    console.log(`\n Task at index number. ${update_Task_index.index - 1} updated successfully [For updated list check option: "View Todo-List" ]\n`) 

}
    main();