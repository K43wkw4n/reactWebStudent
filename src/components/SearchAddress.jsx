import React, { Fragment, useState, useRef, useEffect } from "react";
import AddressData from "../data/addressData.json";

export function SearchAddress({
  placeholder = "",
  className = "input-searchAddress",
  setlabels = "name",
  returnAddress,
  isActive = "",
  title = "",
}) {
  const ref = useRef();
  const [array, setArray] = useState([]);
  const [open, setOpen] = useState(false);
  const [provinces, setProvinces] = useState([
    {
      name: "",
      address: {
        district: "",
        amphure: "",
        province: "",
        zipcode: "",
      },
    },
  ]);
  const [searchAddress, setSearchAddress] = useState("");

  useEffect(() => {
    LoadProvinces();
  }, []);

  function LoadProvinces() {
    var array = [];
    for (let i = 0; i < AddressData.length; i++) {
      array.push({
        name: `${AddressData[i].subdistrictName},${AddressData[i].districtName},${AddressData[i].provinceName},${AddressData[i].postCode}`,
        address: AddressData[i],
      });
    }
    setProvinces(array.map((x) => ({ name: x.name, address: x.address })));
  }

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setArray([]);
        setSearchAddress("");
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [open, setSearchAddress]);

  return (
    <Fragment>
      <div ref={ref}>
        <div className=" position-relative ">
          <label>{title}</label>
          <div className="pl-3 mt-2 position-absolute">
            <i className="fas fa-search w-5 h-5 text-df-red-bg-white" />
          </div>
          <div
            className="pr-3 mt-2 position-absolute"
            style={{ right: 0, cursor: "pointer" }}
            onClick={() => setSearchAddress("")}
          >
            <i className="fa fa-refresh fa-spin" />
          </div>
          <input
            placeholder={placeholder}
            className={className}
            value={searchAddress}
            type="text"
            autoComplete="off"
            onChange={(e) => {
              setSearchAddress(e.target.value);
              if (e.target.value) {
                setArray(
                  provinces.filter((v) =>
                    v[setlabels].includes(e.target.value.toLowerCase().trim())
                  )
                );
                setOpen(true);
              } else {
                setArray([]);
              }
            }}
          />
        </div>
        <ul
          className={`${
            searchAddress && open ? " bg-white shadow-lg list-group" : "hidden"
          }`}
          style={
            searchAddress && open
              ? { position: "absolute", zIndex: 999, listStyleType: "none" }
              : {}
          }
          hidden={searchAddress && open ? false : true}
        >
          {array.length !== 0 && open ? (
            array.map((tiem, index) => (
              <li
                key={index}
                className={`${
                  isActive === tiem.address.subdistrictName &&
                  "bg-blue-500 text-white"
                } p-2 px-5 hoverSearch hover:bg-blue-500 hover:text-white rounded-md my-[2px]`}
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  setOpen(false);
                  if (e) {
                    setSearchAddress("");
                    returnAddress(tiem.address);
                  }
                }}
              >
                <p>{tiem[setlabels]}</p>
              </li>
            ))
          ) : (
            <li className="p-2 px-5 " style={{ color: "red" }}>
              <p className="text-center">
                ไม่พบข้อมูล
                <span>
                  <i className="fa fa-warning w-5 h-5 text-red-700 ml-2" />
                </span>
              </p>
            </li>
          )}
        </ul>
      </div>
    </Fragment>
  );
}
