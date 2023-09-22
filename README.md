# From Master
- 1. use form tag and onSubmit handler with event (e) from e access e.target.[name of the input field].valu

- 2. controlled element: use individual field state for each input filed

- 3. controlled element: one object is a state holding all the input fields value

- 4. uncontrolled element: useRef to reate a reference to the element and access valu by using like: nameRef.current.value

- 5. use hook to handle states and submit and error. example react hook from

- 6. reusable component

# Use Context

- 1. Create a context and export it
- 2. Add provider for the context with a value. Value could be anything.
- 3. useContext to access value in the context API

# What is it
- Call useContext at the top level of top level of your component to read and subcribe to context.

# Prameters
- *SomeContext:* The context that you've previously created with createContext .
- the context itself does not hold the information you can provider or read from components.
# Returns
- useContext returns the context value for calling component.
- It is determined as the value passed to the closest SomeContext.Provider above the calling component is the tree.
- If there is no such provider, then the returned value will be the defaultValue you have passed to createContext for that context.
- The returned value is always up-to-date. React automatically re-renders components that read some context if it changes.
#
# Usage
- Passing data deeply into the tree
- Updating data passed via context
- Specifying a callback default value
- Overriding context for a part of the tree
- Optimizing re-renders when passing objects and functions
# Use cases
- **Theming:** Dark or light theme for your website and pass it down to all the components.
- **User Athentication:** A user's authentication status and pass it to all the components.
- **Multilingual Support:** Curent language of your application in the context and pass it down to all the components.
- **Accessing data from external sources:** Store data retrieved from external sources such ad APIs or databases and make it available to all component.
# Pitfall
- Use default initial values.
- Use a separate file to define your Context.
- Keep Context API limited to global state management only.