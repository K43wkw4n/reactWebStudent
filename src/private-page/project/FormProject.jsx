import React, { Fragment, useState } from "react";
import { Formik, Form } from "formik";
import systemSetting from "../../data/system-setting.json";
import Select from "react-select";
import CKEditors from "../../components/CKEditors";
import { DatePickerTH } from "../../components/TextField";
import { NavLink } from "react-router-dom";

const FormProject = () => {
  const projectStatus = systemSetting.projectStatus;
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Fragment>
      <div className="row">
        <div className="card mb-4 py-3 border-top-primary">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h6>
                <strong>เพิ่มข้อมูลโครงการบริการวิชาการ</strong>
              </h6>
              <div>
                <NavLink to="/" className="btn btn-info btn-md">
                  กลับ
                </NavLink>
              </div>
            </div>
            <hr />

            <Formik
              initialValues={{
                projectName: "",
                projectStatus: "",
              }}
              onSubmit={(v) => {}}
            >
              {({ values, setFieldValue, errors, touched }) => (
                <Form>
                  <div className="row">
                    <div className="form-group col-md-4">
                      <label htmlFor="projectName">ชื่อโครงการ</label>
                      <input
                        className="form-control"
                        type="text"
                        name="projectName"
                        onChange={(e) => {
                          setFieldValue("projectName", e.target.value);
                        }}
                      />
                    </div>

                    <div className="form-group col-md-2">
                      <label htmlFor="projectStatus">สถานะการดำเนินงาน</label>
                      <Select
                        placeholder="- เลือก -"
                        name="projectStatus"
                        options={projectStatus}
                        value={selectedOption}
                        onChange={setSelectedOption}
                        getOptionLabel={(option) => option.status}
                        getOptionValue={(option) => option.code}
                      />
                    </div>

                    <div className="form-group col-md-2">
                      <label htmlFor="years">ปี พ.ศ.</label>
                      <DatePickerTH
                        editable={false}
                        maxDate={new Date()}
                        onlyYearPicker
                        format="YYYY"
                        id="startYear"
                        value={
                          values.startYear
                            ? new Date((values.startYear - 543).toString())
                            : ""
                        }
                        name="startYear"
                        onChange={(date) => {
                          setFieldValue("startYear", date.format());
                        }}
                        errors={errors}
                        touched={touched}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-md-12">
                      <CKEditors
                        toolbar={[
                          "heading",
                          "|",
                          "bold",
                          "italic",
                          "|",
                          "|",
                          "link",
                          "undo",
                          "redo",
                        ]}
                        data={values.detail}
                        name="detail"
                        onChange={(event, editor) => {
                          if (editor.getData() === "") {
                            setFieldValue("detail", editor.detail);
                          }
                          setFieldValue("detail", editor.getData());
                        }}
                        title="รายละเอียด"
                      />
                    </div>
                  </div>

                  <div className="row text-center">
                    <div className="col-md-12 text-center">
                      <button type="submit" className="btn btn-primary btn-md">
                        บันทึก
                      </button>{" "}
                      <button
                        type="reset"
                        className="btn btn-secondary btn-md"
                        onClick={() => {}}
                      >
                        ล้างข้อมูล
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default FormProject;
