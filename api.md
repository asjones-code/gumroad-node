# Products

Methods:

- <code title="get /products/{id}">client.products.<a href="./src/resources/products/products.ts">retrieve</a>(id) -> Response</code>
- <code title="get /products">client.products.<a href="./src/resources/products/products.ts">list</a>() -> Response</code>
- <code title="delete /products/{id}">client.products.<a href="./src/resources/products/products.ts">delete</a>(id) -> Response</code>
- <code title="put /products/{id}/disable">client.products.<a href="./src/resources/products/products.ts">disable</a>(id) -> Response</code>
- <code title="put /products/{id}/enable">client.products.<a href="./src/resources/products/products.ts">enable</a>(id) -> Response</code>

## VariantCategories

Methods:

- <code title="post /products/{product_id}/variant_categories">client.products.variantCategories.<a href="./src/resources/products/variant-categories/variant-categories.ts">create</a>(productId, { ...params }) -> Response</code>
- <code title="get /products/{product_id}/variant_categories/{id}">client.products.variantCategories.<a href="./src/resources/products/variant-categories/variant-categories.ts">retrieve</a>(productId, id) -> Response</code>
- <code title="put /products/{product_id}/variant_categories/{id}">client.products.variantCategories.<a href="./src/resources/products/variant-categories/variant-categories.ts">update</a>(productId, id, { ...params }) -> Response</code>
- <code title="get /products/{product_id}/variant_categories">client.products.variantCategories.<a href="./src/resources/products/variant-categories/variant-categories.ts">list</a>(productId) -> Response</code>
- <code title="delete /products/{product_id}/variant_categories/{id}">client.products.variantCategories.<a href="./src/resources/products/variant-categories/variant-categories.ts">delete</a>(productId, id) -> Response</code>

### Variants

Methods:

- <code title="post /products/{product_id}/variant_categories/{variant_category_id}/variants">client.products.variantCategories.variants.<a href="./src/resources/products/variant-categories/variants.ts">create</a>(productId, variantCategoryId, { ...params }) -> Response</code>
- <code title="get /products/{product_id}/variant_categories/{variant_category_id}/variants/{id}">client.products.variantCategories.variants.<a href="./src/resources/products/variant-categories/variants.ts">retrieve</a>(productId, variantCategoryId, id) -> Response</code>
- <code title="put /products/{product_id}/variant_categories/{variant_category_id}/variants/{id}">client.products.variantCategories.variants.<a href="./src/resources/products/variant-categories/variants.ts">update</a>(productId, variantCategoryId, id, { ...params }) -> Response</code>
- <code title="get /products/{product_id}/variant_categories/{variant_category_id}/variants">client.products.variantCategories.variants.<a href="./src/resources/products/variant-categories/variants.ts">list</a>(productId, variantCategoryId) -> Response</code>
- <code title="delete /products/{product_id}/variant_categories/{variant_category_id}/variants/{id}">client.products.variantCategories.variants.<a href="./src/resources/products/variant-categories/variants.ts">delete</a>(productId, variantCategoryId, id) -> Response</code>

## OfferCodes

Methods:

- <code title="post /products/{product_id}/offer_codes">client.products.offerCodes.<a href="./src/resources/products/offer-codes.ts">create</a>(productId, { ...params }) -> Response</code>
- <code title="get /products/{product_id}/offer_codes/{id}">client.products.offerCodes.<a href="./src/resources/products/offer-codes.ts">retrieve</a>(productId, id) -> Response</code>
- <code title="put /products/{product_id}/offer_codes/{id}">client.products.offerCodes.<a href="./src/resources/products/offer-codes.ts">update</a>(productId, id, { ...params }) -> Response</code>
- <code title="get /products/{product_id}/offer_codes">client.products.offerCodes.<a href="./src/resources/products/offer-codes.ts">list</a>(productId) -> Response</code>
- <code title="delete /products/{product_id}/offer_codes/{id}">client.products.offerCodes.<a href="./src/resources/products/offer-codes.ts">delete</a>(productId, id) -> Response</code>

## CustomFields

Methods:

- <code title="post /products/{product_id}/custom_fields">client.products.customFields.<a href="./src/resources/products/custom-fields.ts">create</a>(productId, { ...params }) -> Response</code>
- <code title="put /products/{product_id}/custom_fields/{name}">client.products.customFields.<a href="./src/resources/products/custom-fields.ts">update</a>(productId, name, { ...params }) -> Response</code>
- <code title="get /products/{product_id}/custom_fields">client.products.customFields.<a href="./src/resources/products/custom-fields.ts">list</a>(productId) -> Response</code>
- <code title="delete /products/{product_id}/custom_fields/{name}">client.products.customFields.<a href="./src/resources/products/custom-fields.ts">delete</a>(productId, name) -> Response</code>

## Subscribers

Methods:

- <code title="get /products/{product_id}/subscribers">client.products.subscribers.<a href="./src/resources/products/subscribers.ts">list</a>(productId, { ...params }) -> Response</code>

# User

Methods:

- <code title="get /user">client.user.<a href="./src/resources/user.ts">retrieve</a>() -> Response</code>

# ResourceSubscriptions

Methods:

- <code title="put /resource_subscriptions">client.resourceSubscriptions.<a href="./src/resources/resource-subscriptions.ts">update</a>() -> Response</code>
- <code title="get /resource_subscriptions">client.resourceSubscriptions.<a href="./src/resources/resource-subscriptions.ts">list</a>({ ...params }) -> Response</code>
- <code title="delete /resource_subscriptions/{resource_subscription_id}">client.resourceSubscriptions.<a href="./src/resources/resource-subscriptions.ts">delete</a>(resourceSubscriptionId) -> Response</code>

# Sales

Methods:

- <code title="get /sales/{id}">client.sales.<a href="./src/resources/sales.ts">retrieve</a>(id) -> Response</code>
- <code title="get /sales">client.sales.<a href="./src/resources/sales.ts">list</a>({ ...params }) -> Response</code>
- <code title="put /sales/{id}/mark_as_shipped">client.sales.<a href="./src/resources/sales.ts">markAsShipped</a>(id, { ...params }) -> Response</code>
- <code title="put /sales/{id}/refund">client.sales.<a href="./src/resources/sales.ts">refund</a>(id, { ...params }) -> Response</code>

# Subscribers

Methods:

- <code title="get /subscribers/{id}">client.subscribers.<a href="./src/resources/subscribers.ts">retrieve</a>(id) -> Response</code>

# Licenses

Methods:

- <code title="put /licenses/disable">client.licenses.<a href="./src/resources/licenses.ts">disable</a>({ ...params }) -> Response</code>
- <code title="put /licenses/enable">client.licenses.<a href="./src/resources/licenses.ts">enable</a>({ ...params }) -> Response</code>
- <code title="post /licenses/verify">client.licenses.<a href="./src/resources/licenses.ts">verify</a>({ ...params }) -> Response</code>
