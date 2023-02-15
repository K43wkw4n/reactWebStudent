import FormEmp from "../private-page/employee/FormEmp";
import ShowEmp from "../private-page/employee/ShowEmp";

export const PrivateRoute = [
  {
    id: 0,
    path: "/",
    element: <ShowEmp />,
  },
  {
    id: 1,
    path: "/formEmp",
    element: <FormEmp />,
  },
];
