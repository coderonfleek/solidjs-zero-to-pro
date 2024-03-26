# Coordinating with `<Suspense>`

* What is `<Suspense>`
  * **`<Suspense>`** is a component in SolidJS designed to handle asynchronous operations' loading states in a more declarative and centralized way. It enhances the user experience by providing a fallback UI (e.g., a loading indicator) while waiting for asynchronous tasks, such as data fetching, to complete.
* How it works
  * **`<Suspense>`** automatically detects when a component or any of its descendants are performing an asynchronous operation that uses SolidJS's reactivity system, such as fetching data with  **`createResource`** .
  * Until the data is available, **`<Suspense>`** displays a fallback UI to the user.
  * This means you don't need to manually manage loading states within each component; instead, you wrap the components that perform asynchronous operations in **`<Suspense>`** and define a fallback.
  * It automatically detects loading states for any child component currently making a request and displays the fallback loading state at the position of the component making the request
