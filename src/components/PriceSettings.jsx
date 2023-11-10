import React from "react";
import ReactSlider from "react-slider";

const MIN_VALUE = 100;
const MAX_VALUE = 10000;

export const PriceSettings = () => {
   const [values, setValues] = React.useState([MIN_VALUE, MAX_VALUE]);
   const [valueFrom, setValueFrom] = React.useState(values[0]);
   const [valueTo, setValueTo] = React.useState(values[1]);
   const handleChangeValueFrom = (e) => {
      setValueFrom(e.target.value.replace(/\D/g, ""));
      setValues([e.target.value.replace(/\D/g, ""), values[1]]);
   };
   const handleChangeValueTo = (e) => {
      setValueTo(e.target.value.replace(/\D/g, ""));
      setValues([values[0], e.target.value.replace(/\D/g, "")]);
   };

   React.useEffect(() => {
      setValueFrom(values[0]);
      setValueTo(values[1]);
   }, [values]);
   return (
      <div className="content-dropdown__price price-dropdown">
         <div className="content-dropdown__top top-dropdown">
            <div className="top-dropdown__labels">
               <span>From</span>
               <span>To</span>
            </div>
            <div className="top-dropdown__inputs inputs-dropdown">
               <input
                  type="text"
                  maxLength={5}
                  value={valueFrom}
                  onChange={handleChangeValueFrom}
                  className="inputs-dropdown__input inputs-dropdown__input--from"
               />
               <div className="top-dropdown__separator"></div>
               <input
                  type="text"
                  maxLength={5}
                  value={valueTo}
                  onChange={handleChangeValueTo}
                  className="inputs-dropdown__input inputs-dropdown__input--to"
               />
            </div>
         </div>
         <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            value={values}
            min={MIN_VALUE}
            max={MAX_VALUE}
            onChange={setValues}
            defaultValue={[MIN_VALUE, MAX_VALUE]}
            ariaValuetext={() => `from ${values[0]} to ${values[1]}`}
            ariaLabel={["start value thumb", "finish value thumb"]}
            ariaLabelledby={["start value thumb", "finish value thumb"]}
            pearling
            minDistance={1000}
         />
      </div>
   );
};
