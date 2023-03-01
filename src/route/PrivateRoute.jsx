import FormEmp from "../private-page/employee/FormEmp";
import ShowEmp from "../private-page/employee/ShowEmp";
import FormProject from "../private-page/project/FormProject";
import ShowProject from "../private-page/project/ShowProject";
import ShowCertificate from "../private-page/certificate/ShowCertificate";

export const PrivateRoute = [
  {
    id: 0,
    path: "/",
    element: <ShowProject />,
  },
  {
    id: 1,
    path: "/project/show-project",
    element: <ShowProject />,
  },
  {
    id: 2,
    path: "/project/create",
    element: <FormProject />,
  },
  {
    id: 3,
    path: "/show-certificate",
    element: <ShowCertificate />,
  },
];
