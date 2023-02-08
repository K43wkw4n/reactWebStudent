import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ValidateFormContact } from "./validate-form/ValidateContact";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Contact us the get started</p>
        </div>

        <div className="row">

          <div className="col-lg-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>

              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe> */}
            </div>

          </div>

          {/* <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                </div>
                                <div className="form-group col-md-6 mt-3 mt-md-0">
                                    <label htmlFor="name">Your Email</label>
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="name">Subject</label>
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="name">Message</label>
                                <textarea className="form-control" name="message" rows="10" required></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div> */}
          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <Formik
              enableReinitialize={true}
              initialValues={{ name: '', email: '', subject: '', message: '', phoneNumber: '', status: '' }}
              validationSchema={ValidateFormContact}
              onSubmit={(values) => {
                let data = { ...values };
                console.log('data : ' + JSON.stringify(data))
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
                    <div className="form-group">
                      <Field component="div" name="status">
                        สถานะภาพ :{" "}
                        <input type="radio" name="status" value="นักศึกษา" className={(errors.name && touched.name ? " is-invalid" : "")} />
                        <label htmlFor="student">นักศึกษา</label>
                        <input type="radio" name="status" value="บุคคลากรมหาวิทยาลัย" className={(errors.name && touched.name ? " is-invalid" : "")} />
                        <label htmlFor="universityPersonnel">บุคคลากรมหาวิทยาลัย</label>
                        <input type="radio" name="status" value="บุคคลภายนอก" className={(errors.name && touched.name ? " is-invalid" : "")} />
                        <label htmlFor="outsider">บุคคลภายนอก</label>
                        <ErrorMessage
                          name='status'
                          component='div'
                          className='invalid-feedback'
                        />
                      </Field>
                    </div>

                    <div className="form-group col-md-6">
                      <label htmlFor="name">ชื่อ-สกุล</label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        className={"form-control" + (errors.name && touched.name ? " is-invalid" : "")}
                        placeholder="ชื่อ-สกุล"
                      />
                      <ErrorMessage
                        name='name'
                        component='div'
                        className='invalid-feedback'
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="name">อีเมลล์</label>
                      <input
                        type="text"
                        name="email"
                        onChange={(e) => {
                          setFieldValue(
                            "email",
                            e.target.value.replace(
                              /[^A-Za-z_.#?!@$%^&*0-9]/gi,
                              ""
                            )
                          )
                        }}
                        onBlur={handleBlur}
                        value={values.email}
                        className={"form-control" + (errors.email && touched.email ? " is-invalid" : "")}
                        placeholder="อีเมลล์"
                      />
                      <ErrorMessage
                        name='email'
                        component='div'
                        className='invalid-feedback'
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="name">เบอร์โทรศัพท์</label>
                      <input
                        className={"form-control" + (errors.phoneNumber && touched.phoneNumber ? " is-invalid" : "")}
                        type="text"
                        rows='auto'
                        name="phoneNumber"
                        onChange={(e) => {
                          setFieldValue(
                            "phoneNumber",
                            e.target.value.replace(
                              /[^0-9]/gi,
                              ""
                            )
                          )
                        }}
                        onBlur={handleBlur}
                        value={values.phoneNumber}
                        id="phoneNumber"
                        placeholder="เบอร์โทรศัพท์"
                      />
                      <ErrorMessage
                        name='phoneNumber'
                        component='div'
                        className='invalid-feedback'
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="name">เรื่อง</label>
                      <input
                        className={"form-control" + (errors.subject && touched.subject ? " is-invalid" : "")}
                        type="text"
                        rows='auto'
                        name="subject"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.subject}
                        id="subject"
                        placeholder="เรื่อง"
                      />
                      <ErrorMessage
                        name='subject'
                        component='div'
                        className='invalid-feedback'
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="name">รายละเอียด</label>
                      <textarea
                        className={"form-control" + (errors.message && touched.message ? " is-invalid" : "")}
                        name="message"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                        rows="auto"
                        placeholder="รายละเอียด"
                      />
                      <ErrorMessage
                        name='message'
                        component='div'
                        className='invalid-feedback'
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

      </div>
    </section>
  )
}

export default Contact;