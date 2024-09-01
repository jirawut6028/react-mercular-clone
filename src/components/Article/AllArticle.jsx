import React from "react";

function AllArticle({ data }) {
  return (
    <div className="w-full ml-5 grid grid-cols-5 grid-rows-2 gap-4">
      {data.slice(0, 7).map((item, index) => (
        <div
          key={index}
          className="first:row-span-2 first:col-span-2 flex flex-col first:gap-1.5 cursor-pointer"
        >
          <div className="overflow-hidden rounded-lg mb-2">
            <img
              src={item.img}
              alt={item.title}
              className={`object-cover hover:scale-110 duration-300 ${
                index == 0 && "h-64"
              }`}
            />
          </div>
          <p className="text-xs text-[#454f5b]">{item.date}</p>
          <p
            className={`font-semibold text-sm ${
              index == 0 ? "line-clamp-1" : "line-clamp-2 "
            }`}
          >
            {item.title}
          </p>
          {index == 0 && (
            <p className="line-clamp-2 text-sm leading-6">{item.desc}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default AllArticle;
