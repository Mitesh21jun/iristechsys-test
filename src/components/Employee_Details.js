import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Employee_Details() {
  let tempData = [];
  let history = useHistory();
  const [tableData, setTableData] = useState("");
  const [sortById, setSortById] = useState(true);
  const [sortByName, setSortByName] = useState(false);
  const [sortBySalary, setSortBySalary] = useState(false);

  // const [sortReverse, setSortReverse] = useState(false);

  useEffect(() => {
    for (let i = 0; i < 100; i++) {
      if (localStorage.getItem(i)) {
        tempData.push(JSON.parse(localStorage.getItem(i)));
      }
    }

    if (sortById) {
      setTableData(tempData);
    } else if (sortByName) {
      let tempSortName;
      setTableData(
        tempData.sort((a, b) => {
          const x = a.name.toUpperCase();
          const y = b.name.toUpperCase();
          return x === y ? 0 : x > y ? 1 : -1;
        })
      );

      if (sortByName && sortBySalary) {
        setTimeout(() => {
          setTableData(
            tableData.sort((a, b) => {
              if (a.name === b.name) {
                const x = a.salary;
                const y = b.salary;
                return x === y ? 0 : x > y ? 1 : -1;
              }
              return 0;
            })
          );
        }, 700);
      }
    } else if (!sortByName && sortBySalary) {
      setTableData(tempData?.sort((a, b) => a.salary - b.salary));
    }
  }, [sortById, sortByName, sortBySalary]);

  setTimeout(() => {
    console.log("tabledata", tableData);
  }, 1500);
  return (
    <div className="offset-2 mt-5 col-8">
      <div>
        <h2
          style={{ textAlign: "center", textDecoration: "underline" }}
          className="mb-5"
        >
          Employee Table
        </h2>{" "}
      </div>

      <table class="table">
        <thead>
          <tr>
            <th
              scope="col"
              onClick={() => {
                // setSortReverse(!sortReverse);
                setSortByName(false);
                setSortBySalary(false);
                setSortById(true);
              }}
              style={{ color: sortById ? "green" : "black" }}
            >
              # <i class="fas fa-sort"></i>
            </th>
            <th
              scope="col"
              style={{ color: sortByName ? "green" : "black" }}
              onClick={() => {
                // setSortReverse(!sortReverse);
                console.log("Sort by name");
                setSortBySalary(false);
                setSortById(false);
                setSortByName(true);
              }}
            >
              Name <i class="fas fa-sort"></i>
            </th>
            <th scope="col">Address</th>
            <th scope="col">Gender</th>
            <th scope="col">Date of Birth</th>
            <th
              scope="col"
              style={{ color: sortBySalary ? "green" : "black" }}
              onClick={() => {
                // setSortReverse(!sortReverse);
                setSortById(false);
                setSortBySalary(true);
              }}
            >
              Salary <i class="fas fa-sort"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData &&
            tableData.map((data, index) => (
              <tr>
                <td>{data.id+1}</td>
                <td>{data.name}</td>
                <td>{data.address}</td>
                <td>{data.gender}</td>
                <td>{data.DOB}</td>
                <td>{data.salary}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <button
          name="enroll"
          class="btn btn-success mt-3"
        onClick={() => history.push('/enroll')}
        >
          Enroll new
        </button>
    </div>
  );
}
export default Employee_Details;
