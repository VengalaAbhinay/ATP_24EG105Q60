import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const navigate = useNavigate();

  const gotoEmployee=(empObj)=>{
    //navigate to /employee
    navigate("/employee",{state:empObj});
  };

  const gotoEditEmployee=(empObj)=>{
    //navigate to /edit-employee along with selected emp object
   navigate("/edit-emp",{state:empObj});
  }
  const deleteEmpById=async(id)=>{
    let res=await fetch(`${import.meta.env.VITE_API_URL}/emp-api/employees/${id}`,{
      method: 'DELETE'
    });
    if(res.status===200){
      //refresh the list of employees
      getEmps();
    }
  }
  //get all emps from backend
  async function getEmps() {
      let res = await axios.get(`${import.meta.env.VITE_API_URL}/emp-api/employees`);
      if (res.status === 200) {
        let resObj = res.data;
        setEmps(resObj.payload);
      }
    }
  useEffect(() =>{
    getEmps();
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-2">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-yellow-200 p-5 rounded-2xl shadow-lg text-center ">
            <p>{empObj.email}</p>
            <p>{empObj.name}</p>
            {/*3 buttons*/}
            <div className="flex justify-around gap-5 mt-5">
              <button onClick={() => gotoEmployee(empObj)} className="bg-green-500 text-white p-2 rounded-2xl">View</button>
              <button onClick={()=>gotoEditEmployee(empObj)} className="bg-white text-black p-2 rounded-2xl">Edit</button>
              <button  onClick={()=>deleteEmpById(empObj._id)} className="bg-red-600 text-white p-2 rounded-2xl">Delete</button>
            </div>  
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;