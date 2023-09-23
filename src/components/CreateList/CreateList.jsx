

const CreateList = () => {
    const postTask = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value
        // const description = form.description.value
        const priority = form.priority.value
        // const startDate = form.startDate.value
        // const endDate = form.endDate.value
        // const status = form.status.value
        // const assigned = form.assigned.value
        // const attachment = form.attachment.value
        console.log(title, priority)
    }
    return (
        <div className='text-center mt-10 mb-4'>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn btn-info" onClick={() => document.getElementById('my_modal_5').showModal()}>Create List</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">New Task</h3>
                    <form onSubmit={postTask}>
                        <div className="form-control">
                            <div className="flex justify-center items-center ">
                                <label className="label ">
                                    <span className="label-text text-1xl me-10">Title</span>
                                </label>
                                <input type="text" placeholder="Title" className="input input-bordered" name="title" required maxLength={100} />
                            </div>
                        </div>
                        <div className="form-control my-3">
                            <div className="flex justify-center items-center ">
                                <label className="label">
                                    <span className="label-text text-1xl me-2">Description</span>
                                </label>
                                <textarea type="text" placeholder="Description" className="input input-bordered" name="title" required maxLength={150} rows={11} />
                            </div>
                        </div>
                        <div className="form-control">
                            <div className="flex justify-center items-center ">
                                <label className="label">
                                    <span className="label-text text-1xl me-2">Priority</span>
                                </label>
                                <span className="ms-4">Low</span>
                                <input type="radio" name="priority" value={'low'} className="radio radio-primary ms-2" checked />
                                <span className="ms-4">Medium</span>
                                <input  type="radio" name="priority" value={'medium'} className="radio radio-warning ms-2" />
                                <span className="ms-4">High</span>
                                <input type="radio" name="priority" value={'high'} className="radio radio-error ms-2" />
                            </div>
                        </div>

                        <input type="submit" value="Submit" />



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