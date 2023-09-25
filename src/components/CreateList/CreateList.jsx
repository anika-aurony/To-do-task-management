import { useEffect, useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const CreateList = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [status, setStatus] = useState(null);
    const [assigned, setAssigned] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
      
        const storedData = JSON.parse(localStorage.getItem('myData'))||[];
        setData(storedData);
    }, []);
    console.log(data)
  


    const postTask = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value
        const description = form.description.value
        const priority = form.priority.value
        const startDate = form.startDate.value
        const endDate = form.endDate.value
        const status = form.status.value
        const assigned = form.assigned.value
        const attachment = form.attachment.value
        const id = data.length++;
        const task = {id, title: title, description, priority, startDate, endDate, status, assigned, attachment }
        // console.log(title, description, priority, startDate, endDate, status, assigned, attachment)
        
        const newData = [...data, task];
        setData(newData);
        console.log(newData)
        addTask(newData)
    }

    const addTask = data =>{
        console.log(data)
        

            localStorage.setItem('myData', JSON.stringify(data));
        
    }

    return (
        <div className='text-center mt-10 mb-4'>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn btn-info" onClick={() => document.getElementById('my_modal_5').showModal()}>Create List</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-3">New Task</h3>
                    <form onSubmit={postTask} className="mx-auto w-3/4">
                        <div className="form-control">
                            <div className="flex items-center ">
                                <label className="label ">
                                    <span className="label-text text-1xl me-8">Title</span>
                                </label>
                                <input type="text" placeholder="Title" className="input input-bordered" name="title" required maxLength={100} />
                            </div>
                        </div>
                        <div className="form-control my-3">
                            <div className="flex items-center ">
                                <label className="label">
                                    <span className="label-text text-1xl ">Description</span>
                                </label>
                                <textarea type="text" placeholder="Description" className="input input-bordered" name="description" required maxLength={150} rows={11} />
                            </div>
                        </div>
                        <div className="form-control">
                            <div className="flex items-center">
                                <label className="label">
                                    <span className="label-text text-1xl me-2">Priority</span>
                                </label>
                                <span className="ms-4">Low</span>
                                <input type="radio" name="priority" value={'low'} className="radio radio-primary ms-2" checked />
                                <span className="ms-4">Medium</span>
                                <input type="radio" name="priority" value={'medium'} className="radio radio-warning ms-2" />
                                <span className="ms-4">High</span>
                                <input type="radio" name="priority" value={'high'} className="radio radio-error ms-2" />
                            </div>
                        </div>
                        <div className="form-control my-3">
                            <div className="flex  items-center ">
                                <label className="label">
                                    <span className="label-text text-1xl me-2">Start Date</span>
                                </label>

                                <DatePicker
                                    selected={selectedDate}
                                    onChange={setSelectedDate}
                                    dateFormat="MM/dd/yyyy" // Customize date format
                                    isClearable // Add a clear button
                                    placeholderText="Select a date"
                                    required
                                />
                                <input type="text" value={selectedDate} name="startDate" hidden />
                            </div>
                        </div>
                        <div className="form-control my-3">
                            <div className="flex  items-center ">
                                <label className="label">
                                    <span className="label-text text-1xl me-2">End Date</span>
                                </label>

                                <DatePicker
                                    selected={selectedEndDate}
                                    onChange={setSelectedEndDate}
                                    dateFormat="MM/dd/yyyy" // Customize date format
                                    isClearable // Add a clear button
                                    placeholderText="Select a date"
                                    required
                                />
                                <input type="text" value={selectedEndDate} name="endDate" hidden />
                            </div>
                        </div>
                        <div className="form-control my-3">
                            <div className="flex  items-center ">
                                <label className="label">
                                    <span className="label-text text-1xl me-2">Status</span>
                                </label>
                                <div className="dropdown">
                                    <label tabIndex={0}><input type="text" name="status" value={status} className="input input-bordered" required /></label>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li onClick={() => setStatus("to-do")}><a>To-do</a></li>
                                        <li onClick={() => setStatus("in-progress")}><a>In-progress</a></li>
                                        <li onClick={() => setStatus("done")}><a>Done</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="form-control my-3">
                            <div className="flex items-center ">
                                <label className="label">
                                    <span className="label-text text-1xl me-2">Assigned </span>
                                </label>
                                <div className="dropdown">
                                    <label tabIndex={0}><input type="text" name="assigned" value={assigned} className="input input-bordered" required /></label>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li onClick={() => setAssigned("Person 1")}><a>Person 1</a></li>
                                        <li onClick={() => setAssigned("Person 2")}><a>Person 2</a></li>
                                        <li onClick={() => setAssigned("Person 3")}><a>Person 3</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="form-control">
                            <div className="flex  items-center ">
                                <label className="label ">
                                    <span className="label-text text-1xl ">Attachment</span>
                                </label>
                                <input type="text" placeholder="Attachment" className="input input-bordered" name="attachment" required />
                            </div>
                        </div>


                        <input className="btn btn-primary mt-4" type="submit" value="Submit" />



                    </form>
                    <div className="modal-action">


                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default CreateList;