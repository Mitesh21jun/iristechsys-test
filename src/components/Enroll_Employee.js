import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function Enroll_Employee() {
  let history = useHistory();

  let id=0;
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [DOB, setDOB] = useState("");
  const [salary, setSalary] = useState("");
  // const [employeeDetails, setEmployeeDetails] = useState("");

  const submitEmployee = () => {
    console.log(name, id);
    if (localStorage.getItem(id)) {
      id = id + 1;
      submitEmployee();
    }
    localStorage.setItem(
      id,
      JSON.stringify({
        id: id,
        name: name,
        salary: salary,
        DOB: DOB,
        gender: gender,
        address: address,
      })
    );
  };

  return (
    <div className="offset-3 mt-5 col-6">
      <form>
        <div><h2
          style={{ textAlign: "center", textDecoration: "underline" }}
          className="mb-5"
        >Enroll new employee</h2> </div>
        <div class="form-group row mb-2">
          <div class="col-4">
            <label class="label-design d-block mb-2"
            style={{textAlign:'left'}}
            >Name :</label>
          </div>
          <div class="col-8">
            <input
              class="form-control"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div class="form-group row mb-2">
          <div class="col-4">
            <label class="label-design d-block mb-2"
              style={{ textAlign: 'left' }}
            >Address :</label>
          </div>
          <div class="col-8">
            <input
              class="form-control"
              type="text"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>

        <div class="form-group row mb-2">
          <div class="col-4">
            <label class="label-design d-block mb-2"       style={{textAlign:'left'}}>Gender :</label>
          </div>
          <div class="col-8">
            <select
              class="form-control"
              onChange={(e) => setGender(e.target.value)}
            >
              <option selected hidden value="">Please select</option>

              <option value="male">Male</option>
              <option value="female">female</option>
            </select>
          </div>
        </div>

        <div class="form-group row mb-2">
          <div class="col-4">
            <label class="label-design d-block mb-2"       style={{textAlign:'left'}}>Date of Birth :</label>
          </div>
          <div class="col-8">
            <input
              class="form-control"
              type='date'
              onChange={(e) => setDOB(e.target.value)}
            />
          </div>
        </div>
        <div class="form-group row mb-2">
          <div class="col-4">
            <label class="label-design d-block mb-2"       style={{textAlign:'left'}}>Salary :</label>
          </div>
          <div class="col-8">
            <input
              type='number'
              class="form-control"
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>
        </div>
        <div>  <button
          name="submit"
          class="btn btn-success mt-3"
          onClick={() => name&&gender&&DOB&&address&&salary? submitEmployee()&&history.push('/'):alert("Please fill all the details")

          }
        >
          Submit
        </button>
        <button 
          name="back"
          class="btn btn-success mx-2 mt-3"
      onClick={() => history.push('/')}
        >
          Back
        </button></div>
      </form>
    </div>
  );
}
export default Enroll_Employee;
