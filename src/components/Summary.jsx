import React from "react";

const Summary = () => {
  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-3">
        <form className="relative flex flex-col  justify-center items-center">
          <input
            type="url"
            placeholder="Paste Article Link Here"
            required
            className="url_input mb-3"
          />

          <button value="submit" className="black_btn">
            Get Summary
          </button>
        </form>

        <div className="my-10 max-w-full flex justify-center items-center ">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold text-black">Summary</h2>
            <div className="summary_box">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                harum repellendus enim recusandae facilis culpa fugiat ipsum
                officia alias, aut quos minima delectus ad eligendi. At odio
                veritatis nostrum magni!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
