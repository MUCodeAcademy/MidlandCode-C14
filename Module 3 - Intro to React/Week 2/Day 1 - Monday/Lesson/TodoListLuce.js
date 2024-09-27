import { useEffect, useState } from "react";

function TodoList() {
    const tasks = [
        "Task 1",
        "Task 2",
        "Task 3"
    ];

    // This automatically sorts the tasks at the beginning.
    // If you want a function to sort it, it would have the same .sort logic, just in a button.
    const [list, setList] = useState(tasks.sort((a, b) => a.localeCompare(b)));
    const [taskName, setTaskName] = useState("");

    useEffect(() => {
        // Update the counter state whenever they type in the input

    
    }, [taskName]); // Whenever taskName changes, update the counter

    function addTask() {
        if (taskName == "") {
            alert("You must enter a task name");
        } else {
            // prevList is the current state of the list
            // ...prevList makes a copy of the current list
            // taskName is our task we created and it will add that to the current state
            setList(prevList => [...prevList, taskName]);
            setTaskName("");
        }
    }

    function deleteTask(taskIndex) {
        // Filters out the current list to only items that don't equal the index of the item they clicked on
        setList(prevList => prevList.filter((item, index) => index != taskIndex));
    }

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {/* Loops through the list state and makes an li for each one */}
                {list.map((item, index) => (
                    <li>
                        {item}
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input onChange={e => setTaskName(e.target.value)} value={taskName} />
            <button onClick={addTask}>Add task</button>
        </div>
    )
}

export default TodoList;