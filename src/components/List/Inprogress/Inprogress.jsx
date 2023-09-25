

const Inprogress = (props) => {
    const taskInprogesses = props.taskInprogess;
    return (
        <div className='lg:mx-10 my-3 '>
            <ul className="menu bg-base-200 w-56 ">
                <li className="menu-title">In-progress</li>
                {taskInprogesses.map(
                    taskInprogess =>  <li key={taskInprogess.id} className='uppercase'><a>{taskInprogess.title}</a></li>
                )}
            </ul>
        </div>
    );
};

export default Inprogress;