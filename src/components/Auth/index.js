import React, { useContext, useState, dispatch } from "react";
import { toast } from "react-hot-toast";
import useForm from "../../hooks/useForm";
import { AuthContext } from "../../state/AuthContext";
import { supabase } from "../../utils/supabaseClient";

const Auth = () => {
  const {
    state: { formType },
    dispatch,
  } = useContext(AuthContext);

  const { form, handleChange, resetForm } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("submit", form);

    if (formType === "signup") {
      const { data, error: signUpError } = await supabase.auth.signUp(
        {
          email: form.email,
          password: form.password,
        },
        {
          data: {
            name: form.name,
          },
        }
      );
      if (signUpError) toast.error(signUpError.message);
      await supabase.from("user").insert([
        {
          name: form.name,
        },
      ]);
    } else {
      const { error } = await supabase.auth.signIn({
        email: form.email,
        password: form.password,
      });
      if (error) toast.error(signUpError.message);
    }
    toast.success(
      formType === "signup"
        ? "Great Success! You have signed up."
        : "Great Success! You have signed in."
    );
    resetForm();
    setLoading(false);
    dispatch({ type: "CLOSE_AUTH_MODAL" });
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
              value={form.name}
              onChange={handleChange}
              required={formType === "signup"}
              disabled={loading}
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
          value={form.email}
          required
          onChange={handleChange}
          disabled={loading}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="outline-black border border-gray p-2 placeholder:text-gray-400"
          placeholder="Password"
          value={form.password}
          minLength={6}
          required
          onChange={handleChange}
          disabled={loading}
        />

        <button
          className={`py-0.5 h-full text-lg w-full bg-black text-white
     hover:text-black hover:bg-white border-black rounded
          ${loading ? "cursor-not-allowed animate-pulse" : "cursor-pointer"}
          `}
          type="submit"
        >
          {loading
            ? "loading..."
            : formType === "signup"
            ? "Sign Up"
            : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default Auth;
