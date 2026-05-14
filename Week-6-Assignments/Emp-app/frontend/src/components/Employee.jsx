
import { useLocation } from "react-router-dom"
function Employee() {
  const { state } = useLocation();

  return (
    <div className="p-16 text-center text-3xl">
      <h1 className="text-5xl text-center text-black">Employee Details</h1>
      <div className="bg-purple-500 p-10 rounded-2xl shadow-lg mt-10 text-left">
        <p className="text-3xl">Name: {state.name}</p>
        <p className="text-3xl">Email: {state.email}</p>
        <p className="text-3xl">Designation: {state.designation}</p>
        <p className="text-3xl">Company: {state.companyName}</p>
        <p className="text-3xl">Mobile: {state.mobile}</p>
      </div>

    </div>
  )
}

export default Employee
