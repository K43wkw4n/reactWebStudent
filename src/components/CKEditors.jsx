import React, { Fragment } from "react";
import { useField } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const CKEditors = ({
  editor,
  toolbar = ["heading", "|", "bold", "italic", "underline"],
  upimage,
  title = "",
  request = false,
  ...props
}) => {
  const [, meta] = useField(props);
  return (
    <Fragment>
      <label className={`truncate ${request && "require-field"}`}>
        {title}
      </label>
      <div
        className={
          meta.touched
            ? meta.error
              ? "border-ckeditor-is-invalid"
              : "border-ckeditor-is-valid"
            : "border-ckeditor-normal"
        }
      >
        <CKEditor
          // editor={editor ? editor : Editor}
          editor={editor ? editor : ClassicEditor}
          // onReady={(editor) => {
          //   editor.ui.view.editable.element.style.minHeight = "300px";
          // }}
          config={{
            toolbar: toolbar,
            mediaEmbed: {
              previewsInData: true,
            },
            extraPlugins: upimage ? [upimage] : "",
            heading: {
              options: [
                {
                  model: "paragraph",
                  title: "Paragraph",
                  class: "",
                },
                {
                  model: "heading1",
                  view: "h1",
                  title: "หัวข้อ1",
                  class: "text-[28px] sm:text-[44px] md:text-[64px]",
                },
                {
                  model: "heading2",
                  view: "h2",
                  title: "หัวข้อ2",
                  class: "text-[18px] sm:text-[24px] md:text-[32px]",
                },
              ],
            },
            numberedList: {
              model: "paragraph",
              title: "Paragraph",
              class: "",
            },
          }}
          {...props}
        />
      </div>
      {/* <ErrorMessage
        component="div"
        name={field.name}
        className="mt-1 text-red-500 text-xs"
      /> */}
    </Fragment>
  );
};

export default CKEditors;