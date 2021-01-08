import React, { Fragment } from "react";
// import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <Fragment>
      <div
        class="spinner-grow text-danger"
        style={{ with: "200px", margin: "auto", display: "block" }}
      ></div>
    </Fragment>
  );
};
export default Spinner;
