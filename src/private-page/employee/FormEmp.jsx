import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Select from "react-select";
import Dropzone from "react-dropzone";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { BsCalendarDate } from "react-icons/bs";
// import { DatePickerTH } from "../../components/DatePickerTH";
import { SearchAddress } from "../../components/SearchAddress";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function FormEmp() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [startDate, setStartDate] = useState(null);
  return (
    <>
      <div className="row">
        <div className="form-group col-md-12 text-left">
          <NavLink to={-1}>
            <button type="button" className="btn btn-outline-primary">
              ย้อนกลับ
            </button>
          </NavLink>
        </div>
      </div>
      <div className="card">
        {/* <div className="card-header">สำหรับทำฟอร์ม</div> */}
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
                  <div className="col-3" style={{ borderWidth: 1 }}>
                    <div className="border px-5">
                      <Dropzone
                        onDrop={(acceptedFiles) => console.log(acceptedFiles)}
                      >
                        {({ getRootProps, getInputProps }) => (
                          <section>
                            <div {...getRootProps()}>
                              <input {...getInputProps()} />
                              <p className="px-4">อัพโหลดรูปภาพโปรไฟล์</p>
                              <p className="">
                                PNG, JPG, JPEG ขนาดไม่เกิน 10MB
                              </p>
                            </div>
                          </section>
                        )}
                      </Dropzone>
                    </div>
                  </div>
                  <div className="row col-9">
                    <div className="form-group col-md-4">
                      <label htmlFor="name">คำนำหน้าชื่อ(TH)</label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="name">ชื่อ(TH)</label>
                      <input
                        type="text"
                        name="name"
                        className={
                          "form-control" +
                          (errors.name && touched.name ? " is-invalid" : "")
                        }
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="name">นามสกุล(TH)</label>
                      <input
                        type="text"
                        name="name"
                        className={
                          "form-control" +
                          (errors.name && touched.name ? " is-invalid" : "")
                        }
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="name">คำนำหน้าชื่อ(EN)</label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="name">ชื่อ(EN)</label>
                      <input
                        type="text"
                        name="name"
                        className={
                          "form-control" +
                          (errors.name && touched.name ? " is-invalid" : "")
                        }
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="name">นามสกุล(EN)</label>
                      <input
                        type="text"
                        name="name"
                        className={
                          "form-control" +
                          (errors.name && touched.name ? " is-invalid" : "")
                        }
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="name">วันเดือนปีเกิด</label>
                      <DatePicker
                        className={
                          "form-control" +
                          (errors.name && touched.name ? " is-invalid" : "")
                        }
                        type="text"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                      {/* <DatePickerTH/> */}
                      <div style={{ position: "absolute", right: 23, top: 36 }}>
                        <BsCalendarDate size={20} />
                      </div>
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="name">อายุ</label>
                      <input
                        type="text"
                        name="name"
                        className={
                          "form-control" +
                          (errors.name && touched.name ? " is-invalid" : "")
                        }
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="name">สัญชาติ</label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="name">โทรศัพท์มือถือ</label>
                      <input
                        type="text"
                        name="name"
                        className={
                          "form-control" +
                          (errors.name && touched.name ? " is-invalid" : "")
                        }
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="name">อีเมล</label>
                      <input
                        type="text"
                        name="name"
                        className={
                          "form-control" +
                          (errors.name && touched.name ? " is-invalid" : "")
                        }
                      />
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="card">
        <div className="card-header">ส่วนที่ 1.1 :: ข้อมูลปัจจุบัน</div>
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
                  <div className="form-group col-md-2">
                    <label htmlFor="name">เลขที่</label>
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
                    />
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="name">หมู่ที่</label>
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
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="name">หมู่บ้าน/อาคาร</label>
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
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="name">ชั้น</label>
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
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="name">ตรอก/ซอย</label>
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
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="name">ถนน</label>
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
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <SearchAddress
                      title="ค้นหาที่อยู่"
                      placeholder="- ค้นหาที่อยู่ -"
                      returnAddress={(e) => {
                        setFieldValue(
                          "addressHomeFullAddress",
                          `ต.${e.subdistrictName} อ.${e.districtName} จ.${e.provinceName} ${e.postCode}
                        `
                        );
                      }}
                      className={
                        "form-control pl-5" +
                        (errors.name && touched.name ? " is-invalid" : "")
                      }
                    />
                    {/* <label htmlFor="name">ค้นหาที่อยู่</label>
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
                      placeholder="-ค้นหาที่อยู่-"
                    /> */}
                  </div>

                  <div className="form-group col-md-4">
                    <label htmlFor="addressHomeFullAddress">
                      ตำบล/อำเภอ/จังหวัด/รหัสไปรษณีย์
                    </label>
                    <input
                      type="text"
                      name="addressHomeFullAddress"
                      value={values.addressHomeFullAddress}
                      className={
                        "form-control" +
                        (errors.name && touched.name ? " is-invalid" : "")
                      }
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="name">ตำแหน่งงาน</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="name">ชื่อโครงการ</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                    />
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default FormEmp;
