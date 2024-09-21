import React from "react";

function Cards({ item }) {
    // console.log(item);
   
  return (
    <> 
      <div>
        <div className="card bg-base-100 w-76 m-5 hover:scale-105 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img
              src={item.Image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
                          <div className="badge badge-secondary">{item.catagory}</div>
            </h2>
                      <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer badge badge-outline hover:bg-pink-500 hover:text-white duration-200">Buy now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
