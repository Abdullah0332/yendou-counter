import { CounterProvider } from "./context/CounterContext";
import Counter from "./components/Counter";
import { Box } from "@chakra-ui/react";

/**
 * The main App component that wraps the Counter component with the CounterProvider.
 * The CounterProvider provides context for managing the counter state, and the
 * Counter component is responsible for displaying and incrementing the count.
 *
 * @returns {JSX.Element} - The main App component with context and Counter.
 */
const App: React.FC = () => (
  <Box height="100vh" width="100%">
    <CounterProvider>
      <Counter />
    </CounterProvider>
  </Box>
);

export default App;
