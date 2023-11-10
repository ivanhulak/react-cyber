import React from 'react';

export const CustomCheckbox = ({ id, name, count }) => {
   const [isChecked, setIsChecked] = React.useState(false);

   return (
      <div className="checkbox-wrapper">
         <input
            id={id}
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked((prev) => !prev)}
         />
         <label htmlFor={id}>
            {name} <span>{count}</span>
         </label>
      </div>
   );
};