const secretKey =
  "sk_test_51NBVSKIzT814jwykT7XCqmsNgAALNFyOkjIXdksck4ggTgWVy0gZ7LThdpfGNpnOQoBCP5XLHinhEnMzpAC6bGQO00u5Bt5K4n";
const stripe = require("stripe")(secretKey);

const createPaymentIntent = async (body) => {
  const data = {
    amount: body.amount,
    currency: "cad",
    automatic_payment_methods: {
      enabled: true,
    },
  };
  const paymentIntent = await stripe.paymentIntents.create(data);

  return { clientSecret: paymentIntent.client_secret };
};

const createCheckoutSession = async (body) => {
  const session = await stripe.checkout.sessions.create(body);

  console.log(body);
  return {
    sessionURL: session.url,
  };
};

module.exports = {
  createPaymentIntent,
  createCheckoutSession,
};
