import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({name: "", email: "", course: ""})
  const [error, setError] = useState("");
  // const nav = useNavigate();

  function handleChange(e) {
    const {name, value} = e.target;
    setForm({...form, [name]: value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(!form.name || !form.email) {
      setError("Complete the input fields waa ka")
      return;
    }
    setError("")
    console.log(`name: ${form.name}, email: ${form.email}`);

    navi("/confirmation");

  }
  
  const navi = useNavigate();
  const balhin = () => {
    navi("confirmation");
  }

  // function errrorMessage() {
  //   if(form.name == null) {
  //     return <p>Provide the input field</p>
  //   }
  // }

    return(
      <form onSubmit={handleSubmit} >
        <input placeholder="Ibutang imohang ngan" name="name" value={form.name} onChange={handleChange}></input>
        <input placeholder="Ibutang imohang email gaw" type="email" name="email" value={form.email} onChange={handleChange}></input>
        <select required>
          <option value="" onChange={handleChange}>----Select Course----</option>
          <option value={form.course} onChange={handleChange}>BSIT</option>
          <option value={form.course} onChange={handleChange}>BSCS</option>
          <option value={form.course} onChange={handleChange}>BSIS</option>
        </select>
        <button type="submit" onSubmit={balhin}>Submit</button>
        {error && <p>{error}</p>}
      </form>
    )
  }

  export default Register