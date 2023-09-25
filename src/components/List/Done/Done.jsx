import React from 'react';

const Done = (props) => {
    const taskDones = props.taskDone;
    return (
        <div className='lg:mx-3 my-3 '>
            <ul className="menu bg-base-200 w-56 ">
                <li className="menu-title">Done</li>
                {taskDones.map(
                    taskDone =>  <li key={taskDone.id} className='uppercase'><a>{taskDone.title}</a></li>
                )}
            </ul>

        </div>
    );
};

export default Done;