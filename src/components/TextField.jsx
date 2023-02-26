/* eslint-disable no-unused-vars */
import React, { Fragment, useState, useRef, useEffect } from "react";
import { useField, getIn } from "formik";
import DatePicker from "react-multi-date-picker";
import thai from "../helpers/Thai";
import thai_th from "../helpers/ThaiTH";

export function DatePickerTH({
  useForm = false,
  title,
  placeholder,
  request = false,
  touched,
  errors,
  className,
  plugins = [],
  format = "DD/MM/YYYY",
  iconCalendar = "",
  ...props
}) {
  const ref = useRef();
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      ref.current.closeCalendar();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <Fragment>
      <div className="row">
        <DatePicker
          plugins={plugins}
          ref={ref}
          showOtherDays
          format={format}
          locale={thai_th}
          calendar={thai}
          containerStyle={{
            width: "100%",
          }}
          {...props}
          render={
            <CustomInput
              placeholder={placeholder}
              inputClass={`
                  ${
                    getIn(touched, props.name)
                      ? getIn(errors, props.name)
                        ? "invalid-input"
                        : useForm
                        ? "form-control relative"
                        : "valid-input"
                      : props.disabled
                      ? "form-control relative"
                      : `form-control relative ${className}`
                  }
                } `}
              disabled={props.disabled}
              iconCalendar={iconCalendar}
            />
          }
        />
      </div>
    </Fragment>
  );
}

function CustomInput({
  openCalendar,
  value,
  handleValueChange,
  placeholder,
  inputClass,
  disabled,
  iconCalendar,
}) {
  return (
    <Fragment>
      <div className="search">
        <span className="form-element">
          <span className="icon-svg">
            <SVGPDatePicker />
          </span>
          <input
            disabled={disabled ? true : false}
            className={inputClass ? inputClass : ""}
            onFocus={openCalendar}
            value={value}
            onChange={handleValueChange}
            placeholder={placeholder === undefined ? "" : placeholder}
            autoComplete="off"
          />
        </span>
      </div>
    </Fragment>
  );
}
function SVGPDatePicker() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-calendar-event"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#3b3b3b"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <line x1="16" y1="3" x2="16" y2="7" />
      <line x1="8" y1="3" x2="8" y2="7" />
      <line x1="4" y1="11" x2="20" y2="11" />
      <rect x="8" y="15" width="2" height="2" />
    </svg>
  );
}
