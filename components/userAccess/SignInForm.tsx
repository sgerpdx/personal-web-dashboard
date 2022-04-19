import React, { useEffect } from "react";
import { useFormik } from "formik";

export default function SignInForm() {
  //

  //
  const formik = useFormik({
    initialValues: {
      title: "",
      text: "",
    },
    onSubmit: (values) => {
      console.log("Current active values:", values);
      setVariable({
        bookmarkTitle: formik.values.title,
        bookmarkURL: formik.values.text,
      });
      saveBookmark(
        { bookmarkTitle: formik.values.title, bookmarkURL: formik.values.text },
        date
      );
      formik.values.title = "";
      formik.values.text = "";
    },
  });

  return (
    <div className="bg-charlotteteal text-hornetgrape">
      <h1>Sign In</h1>
    </div>
  );
}
