import React from 'react';

export default (props) => {

    // var tableRows = [];

    const tableRows = props.data.map((item,index) => {
        return(
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.course}</td>
                <td>{item.grade}</td>
            </tr>
        )
    }); 

    console.log('TableRows',tableRows);

    return(
        <table className="table">
            <thead className="thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>

                {tableRows}

                {/* <tr>
                <th>Smith</th>
                <th>History</th>
                <th>100</th>
                </tr>
                <tr>
                <th>Sam</th>
                <th>Math</th>
                <th>80</th>
                </tr>
                <tr>
                <th>Greg</th>
                <th>Band</th>
                <th>100</th>
                </tr> */}

            </tbody>
        </table>
    )
}

