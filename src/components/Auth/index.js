import React, { useContext } from "react";
import { AuthContext } from "../../state/AuthContext";

const Auth = () => {
  const {
    state: { formType },
  } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <div className="my-2">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-1 justify-center"
      >
        {formType === "signup" && (
          <>
            <label htmlFor="name">Name</label>
            <input
              type="name"
              name="name"
              id="name"
              className="outline-black border border-gray p-2 placeholder:text-gray-400"
              placeholder="Your Name"
            />
          </>
        )}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="outline-black border border-gray p-2 placeholder:text-gray-400"
          placeholder="Email"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="outline-black border border-gray p-2 placeholder:text-gray-400"
          placeholder="Password"
        />

        <button
          className="py-0.5 h-full text-lg w-full bg-black text-white
     hover:text-black hover:bg-white border-black rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Auth;
