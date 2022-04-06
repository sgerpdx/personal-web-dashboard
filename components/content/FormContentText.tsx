import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Person } from "../../data/interfaces";

export default function FormContentText() {
  //
  const [newPerson, setNewPerson] = useState<Person>({
    name: "Biff",
    age: 28,
  });
  //
  const formik = useFormik({
    initialValues: {
      name: "",
      age: 0,
    },
    onSubmit: (values) => {
      console.log("SuperV:", values);
      setNewPerson({
        name: formik.values.name,
        age: formik.values.age,
      });
    },
  });

  useEffect(() => {
    console.log("New New Person:", newPerson);
  }, [newPerson]);

  console.log("Form Values:", formik.values);

  return (
    <>
      {/* <div className="bg-green-300 p-4">
        <h2>HTML Test Form:</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" />

          <button className="bg-blue-100">Submit</button>
        </form>
      </div> */}
      <div className="bg-blue-300 p-4">
        <h2>Formik Test Form:</h2>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />

          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            onChange={formik.handleChange}
            value={formik.values.age}
          />

          <button type="submit" className="bg-green-100">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
