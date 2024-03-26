## How Event Binding Works in SolidJS

- Event handlers are responsible for doing something in response to a user's action
- When you set up an event handler, the event binding is done immediately the component is created. 
- After this the binding between the event and the handler is done and does not need to be tracked.

- Despite this, the event handler can still do different things based on the current state of the app, even though it is not being tracked in SolidJS recativity system.

