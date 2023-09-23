
import Todo from './Todo/Todo';
import Inprogress from './Inprogress/Inprogress';
import Done from './Done/Done';

const List = () => {
    return (
        <div >
            <h2 className='text-center mt-6 mb-4 text-4xl text-base-600 font-semibold'>Task List</h2>

            <div className="lg:flex lg:justify-center lg:items-center bg-blue-300 my-3">

                <div className='flex justify-center items-center'>
                    <Todo></Todo>
                </div>
                <div className='flex justify-center items-center'>
                    <Inprogress />
                </div>
                <div className='flex justify-center items-center'>
                    <Done></Done>
                </div>
            </div>
        </div>
    );
};

export default List;