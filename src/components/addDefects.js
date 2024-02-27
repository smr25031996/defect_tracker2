import "../styles/addDefects.css";
function AddDefects() {
  return (
    <>
      <h1 className="heading">Add Defects</h1>
      <div className="container">
        <label htmlFor="category">Defect Category</label>
        <br />
        <input type="text" id="category" name="category" required />
        <br />
        <label htmlFor="description">Description</label>
        <br />
        <input type="text" id="desceription" name="desceription" required />
        <br />
        <label htmlFor="priority">Priority</label>
        <br />
        <input type="text" id="priority" name="priority" required />
        <br />
        <br />
        <button type="submit">Add Defects</button>
      </div>
    </>
  );
}
export default AddDefects;
