import React, { useState, useRef, useEffect } from "react";

export default function CustomAlert(props) {
  const dismissibleAlert = useRef("responseAlert");
  const close = useRef("alertClose");

  const [data, setData] = useState(props.data);
  const removeAlert = () => {
    setData({
         ...props.data,
          color: ""
    });
  };

  useEffect(() => {
    setData(props.data);
  }, [props]);

  return (
    <>
      <div className="absolute  top-[30] right-[13%] w-[40%]">
        {data.color != "" && (
          <div
            className={`bg-${data.color}-100  text-${data.color}-700 px-4 py-3 rounded relative `}
            role="alert"
            ref={dismissibleAlert}
          >
            <article className="max-w-80">
              <strong className="font-bold">{data.title + " "}</strong>
              <span className="block sm:inline">{data.message}</span>
            </article>
           
            <span
              className="absolute top-0 bottom-0 right-0 me-3 py-3 "
              ref={close}
              onClick={removeAlert}
            >
              <i className={`fa fa-close text-${data.color}-500`}></i>
            </span>
          </div>
        )}
      </div>
    </>
  );
}
