import React from "react";
import '../styles/defects.css'
function Defects() {
  let defects = [
    {
      defectCategory: "UI",
      description:
        "Submit button comoing to the extreme  left refer the screeenshots",
      priority: 2,
      status: "open",
      changeStatus: "close Defecrt",
    },
    {
      defectCategory: "Functional",
      description: "while submitting form data , a confirming popoup should apper Refer srs document",
      priority: "1",
      status: "open",
      changeStatus: "close Defect",
    },
    {
      defectCategory: "Chnage Request",
      description: "Add remove User Functionality",
      priority: 2,
      status: "closed",
      changeStatus: "No pending acction",
    },
  ];
  return (
    <React.Fragment >
      <h1 className="heading">Defect Details</h1>
      <table className="table-container">
        <thead>
          <tr>
            <th>Defect Category</th>
            <th> Description</th>
            <th> Priority</th>
            <th>Status</th>
            <th>Change Status</th>
          </tr>
        </thead>
        <tbody>
            {defects.map((defect)=>{
                return(
                    <tr>
                    <td>{defect.defectCategory}</td>
                    <td>{defect.description}</td>
                    <td>{defect.priority}</td>
                    <td>{defect.status}</td>
                    <td>{defect.changeStatus}</td>

                </tr>
                )
            })}
        </tbody>
      </table>
    </React.Fragment>
  );
}
export default Defects;
