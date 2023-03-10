import React, { useEffect } from "react";
import Pagination from "react-js-pagination";
import { NavLink } from "react-router-dom";

function ShowData({ data, pagin, changePage, changePageSize, deleteData }) {
  return (
    <>
      <div className="mt-5">
        <div className="d-flex justify-content-between">
          <div>
            <select
              value={pagin.pagesize}
              className="form-control form-select pr-5"
              onChange={(e) => {
                changePageSize(parseInt(e.target.value));
              }}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
          <div>
            <NavLink
              to="/project/create"
              className="btn btn-info btn-md"
            >
              <i className="fa fa-plus-circle pr-1"></i>
              เพิ่ม
            </NavLink>
          </div>
        </div>
      </div>

      <div className="table-responsive mt-2">
        <table
          className="table table-bordered"
          id="dataTable"
          width="100%"
          cellSpacing="0"
        >
          <thead>
            <tr>
              <th>ลำดับ</th>
              <th>ชื่อโครงการ</th>
              <th>ปี พ.ศ.</th>
              <th>จักการ</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index + 1}>
                <td>
                  {(pagin.currentpage - 1) * pagin.pagesize + (index + 1)}
                </td>
                <td>{item.projectName}</td>
                <td></td>
                <td>
                  <button className="btn btn-warning btn-circle btn-sm mx-1">
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button
                    onClick={() => deleteData(item.id)}
                    className="btn btn-danger btn-circle btn-sm  mx-1"
                  >
                    <i className="fa fa-remove"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-between">
          <div>จำนวน {pagin.totalrow} รายการ</div>
          <div>
            <Pagination
              activePage={pagin.currentpage}
              itemsCountPerPage={pagin.pagesize}
              totalItemsCount={pagin.totalrow}
              pageRangeDisplayed={pagin.totalpage}
              onChange={(page) => {
                changePage(page);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default ShowData;
