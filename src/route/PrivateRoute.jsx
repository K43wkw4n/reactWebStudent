import FormEmp from "../private-page/employee/FormEmp";
import ShowEmp from "../private-page/employee/ShowEmp";
import FormProject from "../private-page/project/FormProject";
import ShowProject from "../private-page/project/ShowProject";

export const PrivateRoute = [
  {
    id: 0,
    path: "/",
    element: <ShowProject />,
  },
  {
    id: 1,
    path: "/show-project",
    element: <ShowProject />,
  },
  {
    id: 1,
    path: "/form-project",
    element: <FormProject />,
  },
];
