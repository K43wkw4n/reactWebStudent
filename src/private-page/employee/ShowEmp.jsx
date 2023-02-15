import React, { Fragment, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Select from "react-select";
import { Link, NavLink } from "react-router-dom";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function ShowEmp() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Fragment>
      <div className="row">
        <div className="form-group col-md-12 text-right">
          <NavLink to="/formEmp">
            <button type="button" className="btn btn-outline-primary">
              เพิ่มใหม่
            </button>
          </NavLink>
        </div>
      </div>
      <div className="card">
        <div className="card-header">ค้นหาข้อมูล</div>
        <div className="card-body">
          <Formik
            enableReinitialize={true}
            initialValues={{
              name: "",
              email: "",
              subject: "",
              message: "",
              phoneNumber: "",
              status: "",
            }}
            onSubmit={(values) => {
              let data = { ...values };
              console.log("data : " + JSON.stringify(data));
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setFieldValue,
              /* and other goodies */
            }) => (
              <Form onSubmit={handleSubmit} className="php-email-form">
                <div className="row">
                  <div className="form-group col-md-4">
                    <label htmlFor="name">ชื่อ-นามสกุล</label>
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className={
                        "form-control" +
                        (errors.name && touched.name ? " is-invalid" : "")
                      }
                      placeholder="ชื่อ-สกุล"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="name">ตำแหน่ง</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="name">โครงการ</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                    />
                  </div>
                </div>
                <div className="form-group text-center">
                  <button type="submit">Submit</button>{" "}
                  <button type="reset">Reset</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
}

export default ShowEmp;
