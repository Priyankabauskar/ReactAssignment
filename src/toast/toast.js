import React, { useState } from "react";

import "./toast.css";

const ToastMessage = (props) => {
  return <div className="toastContainer">{props.msg}</div>;
};

export default ToastMessage;
