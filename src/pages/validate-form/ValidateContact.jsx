import * as Yup from 'yup';


export const ValidateFormContact = Yup.object({
    name: Yup.string().required('กรุณากรอกชื่อ-สกุล'),
    email: Yup.string()
        .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "รูปแบบอีเมลไม่ถูกต้อง"
        )
    .required("กรุณากรอกอีเมล"),
    subject: Yup.string().required('กรุณากรอกเรื่อง'),
    message: Yup.string().required('กรุณากรอกรายละเอียด'),
    phoneNumber: Yup.string().required('กรุณากรอกรายเบอร์โทรศัพท์'),
    status: Yup.string().required('กรุณากรอกสถานะภาพ'),
})
