import { useState } from "react";

const DataForm = () => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("Indonesia");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleSubmit = (e) => {
    // Stop the form to redirect upon submitting
    e.preventDefault();

    alert(
      JSON.stringify(
        {
          name,
          country,
        },
        null,
        2
      )
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" value={name} onChange={handleChangeName} />
      <label>Country</label>
      <select value={country} onChange={handleChangeCountry}>
        <option value="Indonesia">Indonesia</option>
        <option value="Singapore">Singapore</option>
        <option value="Malaysia">Malaysia</option>
      </select>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default DataForm;
