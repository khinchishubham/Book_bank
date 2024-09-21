import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto ">
        <div className="text-center justify-center items-center p-10">
          <h1 className="text-2xl font-semibold md:text-4xl mt-28">
            We are delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Temporibus, illo. Qui sit voluptate quisquam numquam nihil quibusdam
            animi, aliquam consectetur, obcaecati quos cumque temporibus amet
            eaque velit totam consequatur iure repudiandae non inventore.
            Consectetur aliquid earum impedit at voluptate ullam? Excepturi ab
            ipsa est obcaecati sequi ad quasi impedit nihil!
          </p>
          <Link to="/">
            <button className="mt-5 bg-pink-600 text-white py-1 px-3 rounded-md  hover:bg-pink-700">
              Back
            </button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
