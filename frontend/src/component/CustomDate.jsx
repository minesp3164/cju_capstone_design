import React from "react";

const CustomDate = () => {
  const today = new Date();

  const formatDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

  return (
    <div className="">
      <div>{formatDate}</div>
    </div>
  )
}

export default CustomDate;
