import React from 'react';

const Todo = (props) => {
    console.log(props.taskTodo)
    const todoTasks = props.taskTodo;
    return (
        <div className='lg:mx-3 my-3 '>
            <ul className="menu bg-base-200 w-56  ">
                <li className="menu-title">To-do</li>
                {todoTasks.map(
                    todoTask => <li key={todoTask.id} className='uppercase'><a>{todoTask.title}</a></li>
                )}

            </ul>

         
        </div>
    );
};

export default Todo;