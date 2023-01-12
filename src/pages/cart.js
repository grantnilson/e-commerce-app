import { useContext } from "react";
import toast from "react-hot-toast";
import Layout from "../components/Layout";
import { AuthContext } from "../state/AuthContext";
import { CartContext } from "../state/CartContext";
import { supabase } from "../utils/supabaseClient";

const CartPage = () => {
  const { cartWithQuantity, totalPrice } = useContext(CartContext);

  const { dispatch } = useContext(AuthContext);

  const handleCheckout = async () => {
    if (!supabase.auth.getSession()) {
      dispatch({
        type: "OPEN_AUTH_MODAL",
        formType: "login",
      });
      return toast.error("You must be logged in to checkout");
    }
    const { data: user_info } = await supabase.auth.getUser();

    const { data: selected_user } = await supabase
      .from("user")
      .select()
      .eq("email", user_info.user.email);

    const { data, error } = await supabase.from("order").insert([
      {
        status: "PENDING",
        user_id: selected_user[0].id,
      },
    ]);
    if (!error) {
      toast.success("Order checked out successfully!");
    }
  };

  return (
    <Layout>
      <section className="p-4">
        <h1 className="my-4 text-4xl text-light">Cart</h1>
        {cartWithQuantity && (
          <div className="flex flex-col gap-y-4">
            {cartWithQuantity.map((product, idx) => (
              <div
                key={`${product.id}+ ${idx}`}
                className="flex flex-col gap-y-4"
              >
                <p>
                  {product.name} x{product.quantity} = $
                  {product.quantity * product.price || 0}
                </p>
              </div>
            ))}
            <p>Total: ${totalPrice || 0}</p>
            <button
              className="py-0.5 h-full text-lg w-full bg-black hover:text-black hover:bg-white border-black border text-white rounded"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default CartPage;
