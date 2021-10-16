import { fetchApi } from "./fetch-api";
import { getAllProductsQuery } from "./queries/get-all-products-query";
import { normalizeProduct } from "./normalize/normalizeProduct";
import { getCheckoutId } from "./get-checkout-id";
import { checkoutLineItemsAdd } from "./mutations";
import { createCheckout } from "./create-checkout";


export { fetchApi, getAllProductsQuery, normalizeProduct, getCheckoutId, checkoutLineItemsAdd, createCheckout};