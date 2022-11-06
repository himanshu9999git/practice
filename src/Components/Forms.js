import { useState } from "react";

const Forms = () => {
  const [form, setForm] = useState({
    firstName: "Luke",
    lastName: "Jones",
    email: "lukejones123@gmail.com",
  });
  return (
    <>
      <label>
        FirstName:
        <input
          value={form.firstName}
          type="text"
          onChange={e => {
            setForm({ ...form, firstName: e.target.value });
          }}

        />
      </label>
      <label>
        FirstName:
        <input
          value={form.firstName}
          type="text"
          onChange={e => {
            setForm({ ...form, firstName: e.target.value });
          }}

        />
      </label>
      <label>
        FirstName:
        <input
          value={form.firstName}
          type="text"
          onChange={e => {
            setForm({ ...form, firstName: e.target.value });
          }}

        />
      </label>
      <div>
        {form.firstName}
      </div>
    </>
  );
};

export default Forms;
