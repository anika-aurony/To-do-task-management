import React from 'react';
import Todo from './Todo/Todo';
import Inprogress from './Inprogress/Inprogress';
import Done from './Done/Done';

const List = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <h2 className='text-center mt-3 text-2xl text-base-100'>Task List</h2>
            <div className="menu menu-vertical lg:menu-horizontal bg-blue-300 my-3">

                <div className='lg:ms-3'>
                    <Todo></Todo>
                </div>
                <div>
                    <Inprogress />
                </div>
                <div>
                    <Done></Done>
                </div>
            </div>
        </div>
    );
};

export default List;