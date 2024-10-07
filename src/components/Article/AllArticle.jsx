function AllArticle({ article }) {
  return (
    <div className="grid w-full gap-4 xl:grid-cols-5 lg:ml-5 lg:grid-cols-3">
      {article.slice(0, 7).map((item, index) => (
        <div
          key={index}
          className={`cursor-pointer ${
            index == 0
              ? "row-span-2 max-xl:col-span-full col-span-2"
              : "max-lg:flex max-lg:gap-2"
          }`}
        >
          <div
            className={`overflow-hidden rounded-xl ${
              index == 0 ? "mb-4 max-lg:mb-2" : "mb-2"
            }`}
          >
            <img
              src={item.img}
              alt={item.title}
              className={`object-cover hover:scale-110 duration-300 ${
                index == 0 ? "h-64 max-xl:w-full" : "w-[300px]"
              }`}
            />
          </div>
          <div className={`${index != 0 && "max-lg:w-[312px]"}`}>
            <p className="text-xs text-[#454f5b]">{item.date}</p>
            <p
              className={`font-semibold text-sm ${
                index == 0 ? "line-clamp-1 py-1" : "line-clamp-2"
              }`}
            >
              {item.title}
            </p>
            {index == 0 && <p className="text-sm line-clamp-2">{item.desc}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllArticle;
