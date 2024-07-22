# Testing Context

In general, testing context can be annoying depending on how complex your context file is. The main reason for this is that you cannot use hooks such as useContext outside of a component, which means you cannot call them in a test file. For this reason, we'll need to create a new, temporary test component in the test file, and then use the hook (like useUser) and mock the return values. Here's an example that could be used for UserContext:

```js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { UserProvider, useUserContext } from './UserContext';

// Mocking useUserContext
jest.mock('./UserContext', () => ({
  useUserContext: jest.fn()
}));

// A mocked version of our real component
function TestComponent() {
  const { user, setUser, clearUser } = useUserContext();
  return (
    <div>
      <input data-testid="username" value={user ? user.username : ''} />
      <button onClick={() => setUser({ username: "test" })}>Set User</button>
      <button onClick={() => clearUser()}>Clear User</button>
    </div>
  );
}

test('handles user actions correctly', () => {
    // Mock our context functions
    const mockSetUser = jest.fn();
    const mockClearUser = jest.fn();
    // We have to mock the return value of our context
    useUserContext.mockReturnValue({
        user: null, // initially no user is logged in
        setUser: mockSetUser,
        clearUser: mockClearUser
    });

    // Make sure you render the component with the providers around it
    const { getByText, getByTestId } = render(
        <UserProvider>
            <TestComponent />
        </UserProvider>
    );

    const usernameInput = getByTestId("username");

    // Initially the input should be empty
    expect(usernameInput.value).toBe('');

    // Simulate the button click that triggers setUser
    fireEvent.click(getByText("Set User"));
    // Ensure setUser is called with the right parameter
    expect(mockSetUser).toHaveBeenCalledWith({ username: "test" });

    // Now, let's simulate clearing the user
    fireEvent.click(getByText("Clear User"));
    // Check if clearUser was called
    expect(mockClearUser).toHaveBeenCalled();
});
```
