import React from "react";

const Card = ({image , title  }) => {
  return (
    <>
     <div className={`max-[50px] object-cover rounded-xl overflow-hidden shadow-lg  `}  >
      
      <img
        className={`w-full h-48 object-cover `}
        src={image}
        alt="Placeholder"
      />
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold mb-2 text-stone-200">{title}</h2>
       
      </div>
    </div>
    </>
   
  );
};

export default Card;



