## Dynamic Navigation


* The `useNavigate` hook
  * **`useNavigate`** is a hook in SolidJS that provides a function for programmatically navigating between routes in an application, facilitating dynamic URL changes.
  * It enables developers to update the browser's URL and manage the navigation history without requiring user interaction with link elements.
  * Commonly applied in scenarios like post-form submission redirection, conditional routing based on authentication, and within event handlers, **`useNavigate`** offers flexible control over navigation in response to app logic and state changes.
* The `<Navigate />` component
  * Similar to `A` in structure, however The **`<Navigate />`** component in SolidJS's routing system ( **`@solidjs/router`** ) is used to programmatically navigate to a different route.
  * It's essentially a way to perform redirections within your application.
  * This component is often used in scenarios like handling protected routes (redirecting if a user isn't authenticated) or after certain actions (like form submission).
