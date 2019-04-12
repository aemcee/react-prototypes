import React from 'react';
import Table from './table';

const students = [
   {
       name: 'Jim',
       course: 'History',
       grade: 95
   },
   {
        name: 'Bob',
        course: 'Gym',
        grade: 75
    },
    {
        name: 'Greg',
        course: 'Computer Science',
        grade: 50
    }

];

function App(){
    // return <h1>My first React functional component</h1>
    return(
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
}

export default App; 
