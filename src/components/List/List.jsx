
import Todo from './Todo/Todo';
import Inprogress from './Inprogress/Inprogress';
import Done from './Done/Done';
import { useEffect, useState } from 'react';

const List = () => {
    
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      
        const storedData = JSON.parse(localStorage.getItem('myData'))||[];
        setTasks(storedData);
    }, []);

    console.log(tasks)

    const taskFilters = tasks.filter((task) => task != null);
    const taskTodo = taskFilters.filter((task) => task.status == "to-do");
    const taskInprogess = taskFilters.filter((task) => task.status == "in-progress");
    const taskDone = taskFilters.filter((task) => task.status == "done");
    // console.log(taskFilters)
    // console.log(taskTodo)
    // console.log(taskInprogess)
    // console.log(taskDone)
    return (
        <div >
            <h2 className='text-center mt-6 mb-4 text-4xl text-base-600 font-semibold'>Task List</h2>

            <div className="lg:flex lg:justify-center lg:items-center bg-blue-300 my-3">

                <div className='flex justify-center items-center'>
                    <Todo taskTodo={taskTodo}></Todo>
                </div>
                <div className='flex justify-center items-center'>
                    <Inprogress taskInprogess ={taskInprogess}/>
                </div>
                <div className='flex justify-center items-center'>
                    <Done taskDone = {taskDone}></Done>
                </div>
            </div>
        </div>
    );
};

export default List;