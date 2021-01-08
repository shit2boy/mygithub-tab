import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const SelectInput = (props) => {
  return (
    <>
      <DropdownButton
        variant="light"
        id="dropdown-basic-button"
        title={props.value}
      >
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another </Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something </Dropdown.Item>
      </DropdownButton>
    </>
  );
};

export default SelectInput;
