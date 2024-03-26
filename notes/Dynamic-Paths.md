## Dynamic Routes


1. **Path Parameters** : Dynamic routes are defined using parameters in the route path, which are typically denoted with a colon **`:`** followed by the parameter name (e.g.,  **`/users/:userId`** ). The parameters are then extracted using Solid Router’s `useParams` hook.
2. **Flexibility** : They allow a single route configuration to match a range of URLs, with the variable parts of the URL passed as parameters to the route's component.
3. **Capturing URL Data** : The captured parameters from the URL can be used in your component to load data dynamically based on the URL (e.g., fetching a user's details based on their ID in the URL).
