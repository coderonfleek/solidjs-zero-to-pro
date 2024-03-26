
- The main difference between `<For>` and `<Index>` is that For is more concerned about the values in your array, the index of these values can be changed if need be

- However, `Index` cares about preserving the index while the values can change

- Due to this, `For` will re-render the list each time a value changes. This is not ideal for looping over widgets like form elements. Each time the user changes a value with a form element, `For` will attempt to re-render the loop