import React from "react";

const Job = props => {
  return (
    <section className={props.infos.className}>
      <h2>{props.infos.title}</h2>
      <div>
        {props.infos.contractType} {props.infos.country} {props.infos.city}
      </div>
    </section>
  );
};

export default Job;
