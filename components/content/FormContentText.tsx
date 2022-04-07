///// NOTE: This file was for demo purposes and s/b deleted before production
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Person } from "../../data/interfaces";

export default function FormContentText() {
  // Regular state variable that is fed by the Formik form submission
  const [newPerson, setNewPerson] = useState<Person>({
    name: "Biff",
    age: 28,
  });

  // This hook allows management of the Formik form setup and submission
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

  // Verify that the state variable is being set via Formik
  useEffect(() => {
    console.log("New New Person:", newPerson);
  }, [newPerson]);

  console.log("Form Values:", formik.values);

  return (
    <>
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
