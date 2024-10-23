import commonAPI from "./commonAPI";
import SERVERURL from "./serverUrl";

// uploadEmployee api api must called by Add component

export const uploadEmployeeAPI=async(empDetails)=>{
    return await commonAPI("POST",`${SERVERURL}/employeeDetails`,empDetails)
}   

// getEmployeeAPI- called by Home component

export const getEmployeeAPI=async()=>{
    return await commonAPI("GET",`${SERVERURL}/employeeDetails`,"")
}

// deleteEmployeeAPI - called by Home component to delete an employee
export const deleteEmployeeAPI = async (id) => {
    return await commonAPI("DELETE", `${SERVERURL}/employeeDetails/${id}`, "");
  };

// Update employee API call
export const updateEmployeeAPI = async (id, empDetails) => {
    return await commonAPI("PUT", `${SERVERURL}/employeeDetails/${id}`, empDetails);
  };


  // Get a single employee by ID - called by Edit component
export const getEmployeeByIdAPI = async (id) => {
  return await commonAPI("GET", `${SERVERURL}/employeeDetails/${id}`, "");
};

  
  