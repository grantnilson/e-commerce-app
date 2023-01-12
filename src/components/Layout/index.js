import { useRouter } from "next/router";
import React, { useMemo, useContext } from "react";
import Modal from "../Modal";
import Auth from "../Auth";
import { AuthContext } from "../../state/AuthContext";
import { supabase } from "../../utils/supabaseClient";
import { CartContext } from "../../state/CartContext";
import { Toast } from "react-hot-toast";
import Link from "next/link";

const Layout = ({ children }) => {
  const router = useRouter();

  const { totalCartItems } = useContext(CartContext);

  const {
    state: { isModalOpen, formType, session },
    dispatch,
  } = useContext(AuthContext);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) return toast.error(error.message);
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="flex flex-col w-full h-full">
      <header className="w-full h-32 my-4 mx-auto flex items-center bg-gray-200 justify-end space-x-4">
        <div className="mx-auto select-none text-2xl font-light">
          <Link href="/" className="">
            E-Commerce Web Application
          </Link>
        </div>
        {!session && (
          <>
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
          </>
        )}
        {session && (
          <>
            <div className="">
              <button
                className="px-4 py-2 text-lg bg-black text-white hover:text-black hover:bg-white border-black rounded"
                onClick={() => router.push("/admin")}
              >
                Admin
              </button>
            </div>
            <div className="">
              <button
                className="px-4 py-2 text-lg bg-black text-white hover:text-black hover:bg-white border-black rounded"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
            <div className="">
              <button
                className="px-4 py-2 text-lg bg-black text-white hover:text-black hover:bg-white border-black rounded"
                onClick={() => router.push("/cart")}
              >
                Logout
              </button>
            </div>
          </>
        )}
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
