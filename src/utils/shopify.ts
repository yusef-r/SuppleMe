const SHOPIFY_API_URL = `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2023-04/graphql.json`;
const STOREFRONT_ACCESS_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  images: {
    edges: Array<{
      node: {
        url: string;
      };
    }>;
  };
  variants: {
    edges: Array<{
      node: {
        price: {
          amount: string;
          currencyCode: string;
        };
      };
    }>;
  };
}

interface ShopifyCollection {
  id: string;
  title: string;
  handle: string;
}

export const shopify = {
  getProducts: async () => {
    const query = `
      {
        products(first: 50) {
          edges {
            node {
              id
              title
              handle
              description
              images(first: 1) {
                edges {
                  node {
                    url
                  }
                }
              }
              variants(first: 1) {
                edges {
                  node {
                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

    try {
      const response = await fetch(SHOPIFY_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': STOREFRONT_ACCESS_TOKEN || '',
        },
        body: JSON.stringify({ query }),
      });

      const result = await response.json();
      return result.data.products.edges.map((edge: { node: ShopifyProduct }) => ({
        id: edge.node.id,
        name: edge.node.title,
        handle: edge.node.handle,
        description: edge.node.description || 'No description available',
        price: edge.node.variants.edges[0]?.node.price.amount || '0.00',
        image: edge.node.images.edges[0]?.node.url || '/placeholder-image.png',
      }));
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  },

  getProductByHandle: async (handle: string) => {
    const query = `
      query($handle: String!) {
        productByHandle(handle: $handle) {
          id
          title
          handle
          description
          images(first: 5) {
            edges {
              node {
                url
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    `;

    try {
      const response = await fetch(SHOPIFY_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': STOREFRONT_ACCESS_TOKEN || '',
        },
        body: JSON.stringify({ 
          query, 
          variables: { handle } 
        }),
      });

      const result = await response.json();
      const product = result.data.productByHandle;

      if (!product) return null;

      return {
        id: product.id,
        name: product.title,
        handle: product.handle,
        description: product.description || 'No description available',
        price: product.variants.edges[0]?.node.price.amount || '0.00',
        image: product.images.edges[0]?.node.url || '/placeholder-image.png',
        rating: Math.random() * (5 - 4) + 4, // Placeholder rating
      };
    } catch (error) {
      console.error(`Error fetching product ${handle}:`, error);
      return null;
    }
  },

  getCollections: async () => {
    const query = `
      {
        collections(first: 10) {
          edges {
            node {
              id
              title
              handle
            }
          }
        }
      }
    `;

    try {
      const response = await fetch(SHOPIFY_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': STOREFRONT_ACCESS_TOKEN || '',
        },
        body: JSON.stringify({ query }),
      });

      const result = await response.json();
      return result.data.collections.edges.map((edge: { node: { id: string, title: string, handle: string } }) => ({
        id: edge.node.id,
        title: edge.node.title,
        handle: edge.node.handle,
      }));
    } catch (error) {
      console.error('Error fetching collections:', error);
      return [];
    }
  },
}; 