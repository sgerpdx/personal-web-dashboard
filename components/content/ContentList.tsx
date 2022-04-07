import React, { MouseEventHandler } from "react";
// Interface imports
import { NewsItem } from "../../data/interfaces";
// Component imports
import ContentItem from "./ContentItem";
// Formik
import {
  useFormik,
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";

interface MyFormValues {
  bookmarkTitle: string;
  bookmarkURL: string;
  dateCreated: string;
}

export default function ContentList({
  currentNewsItem,
  onClick,
}: {
  currentNewsItem: NewsItem;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  //
  const myInitialValues: MyFormValues = {
    bookmarkTitle: "",
    bookmarkURL: "",
    dateCreated: "",
  };

  // Need to figure out why this code is only logging final character of input and not showing updated input in text field maybe via a good Formik tutorial:
  const formik = useFormik({
    initialValues: myInitialValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <section>
        <div className="bg-purple-300 text-blue-700 h-240 w-80">
          <h2>Content Items:</h2>
          <ContentItem currentNewsItem={currentNewsItem} />
          {/* <div>
            <form>
              <label>Bookmark a URL:</label>
              <input type="text" placeholder="title" />
              <input type="text" placeholder="URL" />
            </form>
            <button onClick={onClick}>Save</button>
          </div> */}
        </div>
        <div className="bg-gray-300">
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="title">Bookmark Title</label>
            <input
              id="title"
              name="title"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.bookmarkTitle}
            />

            <button type="submit">Submit</button>
          </form>
        </div>
        {/* <div className="bg-gray-300 text-blue-700">
          <h1>Formik Bookmark Example</h1>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              console.log({ values, actions });
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }}
          >
            <Form>
              <label htmlFor="bookmarkTitle">Bookmark Title</label>
              <Field
                id="bookmarkTitle"
                name="bookmarkTitle"
                placeholder="Bookmark Title"
              />
              <label htmlFor="bookmarkURL">Bookmark URL</label>
              <Field
                id="bookmarkURL"
                name="bookmarkURL"
                placeholder="Bookmark URL"
              />
              <label htmlFor="dateCreated">Date Created</label>
              <Field
                id="dateCreated"
                name="dateCreated"
                placeholder="Date Created"
              />
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div> */}
      </section>
    </>
  );
}
