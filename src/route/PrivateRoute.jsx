import ShowEmp from "../private-page/employee/ShowEmp";
import FormProject from "../private-page/project/FormProject";

export const PrivateRoute = [
  {
    id: 0,
    path: "/",
    element: <ShowEmp />,
  },
  {
    id: 1,
    path: "/FormProject",
    element: <FormProject />,
  },
];
