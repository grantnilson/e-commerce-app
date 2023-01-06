import { useRouter } from "next/router";
import React, { useState, useContext } from "react";
import Modal from "../Modal";
import Auth from "../Auth";
import { AuthContext } from "../../state/AuthContext";

const Layout = ({ children }) => {
  const router = useRouter();

  const {
    state: { isModalOpen, formType },
    dispatch,
  } = useContext(AuthContext);

  return (
    <div>
      <header className="w-full h-32 my-4 mx-auto flex items-center bg-gray-200 justify-end space-x-4">
        <h1 className="mx-auto text-2xl font-light">
          E-Commerce Web Application
        </h1>
        <div className="">
          <button
            className="px-4 py-2 text-lg bg-black text-white hover:text-black hover:bg-white border-black rounded"
            onClick={() =>
              dispatch({
                type: "OPEN_AUTH_MODAL",
                formType: "signup",
              })
            }
          >
            Sign Up
          </button>
        </div>
        <div className="">
          <button
            className="px-4 py-2 text-lg bg-black text-white hover:text-black hover:bg-white border-black rounded"
            onClick={() =>
              dispatch({
                type: "OPEN_AUTH_MODAL",
                formType: "login",
              })
            }
          >
            Log In
          </button>
        </div>
        <div className="">
          <button
            className="px-4 py-2 text-lg bg-black text-white hover:text-black hover:bg-white border-black rounded"
            onClick={() => router.push("/admin")}
          >
            Admin
          </button>
        </div>
      </header>
      <Modal
        isOpen={isModalOpen}
        closeModal={() =>
          dispatch({
            type: "CLOSE_AUTH_MODAL",
          })
        }
        title="Sign Up!"
      >
        <Auth />
      </Modal>
      {children}
    </div>
  );
};

export default Layout;
