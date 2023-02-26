import FormEmp from "../private-page/employee/FormEmp";
import ShowEmp from "../private-page/employee/ShowEmp";
import FormProject from "../private-page/project/FormProject";

export const PrivateRoute = [
  {
    id: 0,
    path: "/",
    element: <FormProject />,
  },
  {
    id: 1,
    path: "/show-project",
    element: <FormEmp />,
  },
  {
    id: 1,
    path: "/form-project",
    element: <FormProject />,
  },
];
