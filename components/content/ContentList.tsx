import React, { MouseEventHandler } from "react";
// Interface imports
import { NewsItem } from "../../data/interfaces";
// Component imports
import ContentItem from "./ContentItem";
// Formik
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";

interface MyFormValues {
  firstName: string;
}

export default function ContentList({
  currentNewsItem,
  onClick,
}: {
  currentNewsItem: NewsItem;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  //
  const initialValues: MyFormValues = { firstName: "" };

  return (
    <>
      <section>
        <div className="bg-purple-300 text-blue-700 h-240 w-80">
          <h2>Content Items:</h2>
          <ContentItem currentNewsItem={currentNewsItem} />
          <div>
            <form>
              <label>Bookmark a URL:</label>
              <input type="text" placeholder="title" />
              <input type="text" placeholder="URL" />
            </form>
            <button onClick={onClick}>Save</button>
          </div>
        </div>
        <div>
          <h1>My Example</h1>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              console.log({ values, actions });
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }}
          >
            <Form>
              <label htmlFor="firstName">First Name</label>
              <Field id="firstName" name="firstName" placeholder="First Name" />
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      </section>
    </>
  );
}
