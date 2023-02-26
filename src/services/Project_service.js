import projectData from "../data/project.json";

import { pagination } from "../helpers/Pagination";

export function getProject(search = "", pagesize = 10, currentpage = 1) {
  let project = projectData;

  if (search) {
    project = project.filter((e) => e.projectName.includes(search));
  }

  return pagination(pagesize, currentpage, project);
}
