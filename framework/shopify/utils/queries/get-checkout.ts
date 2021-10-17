import { checkoutDetailFragment } from "@framework/utils";

export const getCheckoutQuery = `
   query($checkoutId: ID!){
    node(id: $checkoutId) {
      ... on Checkout {
        ${checkoutDetailFragment}
      }
    }
  }
`;