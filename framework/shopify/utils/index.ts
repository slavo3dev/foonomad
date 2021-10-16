import { fetchApi } from "./fetch-api";
import { getAllProductsQuery } from "./queries/get-all-products-query";
import { normalizeProduct } from "./normalize/normalizeProduct";
import { getCheckoutId } from "./get-checkout-id";
import {  checkoutLineItemsAdd } from "./mutations";


export { fetchApi, getAllProductsQuery, normalizeProduct, getCheckoutId, checkoutLineItemsAdd};