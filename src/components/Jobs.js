import React from "react";
import Job from "./Job";

const Jobs = props => {
  return (
    <main>
      {props.infos.map((object, i) => (
        <Job infos={object} />
      ))}
    </main>
  );
};

export default Jobs;
