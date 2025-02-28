import React, { createContext, useContext, useState, ReactNode } from "react";

/**
 * Context to provide and consume counter state and increment function.
 */
interface CounterContextType {
  count: number;
  increment: () => void;
}

/**
 * Default values for the CounterContext.
 */
const defaultCounterContext: CounterContextType = {
  count: 0,
  increment: () => {},
};

/**
 * Create a Context for managing the counter state.
 * This context will be used to share the counter value and increment function
 * with the components that consume it.
 */
const CounterContext = createContext<CounterContextType>(defaultCounterContext);

/**
 * CounterProvider component that manages the counter state and provides it
 * to the children components using Context.
 *
 * @param children - React children that will consume the context.
 *
 * @returns JSX.Element - The Provider component that wraps the children with the context.
 */
export const CounterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // State hook for storing the count value.
  const [count, setCount] = useState<number>(0);

  /**
   * Increment the count by 1.
   */
  const increment = () => setCount((prev) => prev + 1);

  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  );
};

/**
 * Custom hook to access the CounterContext.
 * It provides the count value and the increment function from the context.
 *
 * @returns {CounterContextType} - The context value with count and increment.
 */
export const useCounter = (): CounterContextType => {
  return useContext(CounterContext);
};
