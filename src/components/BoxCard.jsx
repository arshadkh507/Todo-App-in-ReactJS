import { useState } from "react";

const BoxCard = ({ result, children }) => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <div className={`box ${result}`}>
          {children}
          <button onClick={() => setShow(!show)} className="trigger">
            Hide
          </button>
        </div>
      )}
    </>
  );
};

export default BoxCard;
