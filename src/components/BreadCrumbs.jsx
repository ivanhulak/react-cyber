import React from "react";

const breadcrumbs = ['Home', 'Catalog', 'Smartphones']
export const BreadCrumbs = () => {

  return (
    <div className="breadcrumbs">
      <div className="container">
         <div className="breadcrumbs__body">
            <ul className="breadcrumbs__list">
              {breadcrumbs.map((b, idx) => <li key={idx}>{b}</li>)}
            </ul>
         </div>
      </div>
    </div>
  );
};
