import { Button, Text, HStack, Flex } from "@chakra-ui/react";
import { useCounter } from "../context/CounterContext";
import { useEffect } from "react";
import useToastNotification from "../hook/useToastNotification";

/**
 * Counter component that displays the current count and allows the user
 * to increment it. The component also shows a toast notification when
 * the count is incremented.
 *
 * @returns {JSX.Element} - The Counter component.
 */
const Counter: React.FC = () => {
  // Destructure the state and function from the counter context
  const { count, increment } = useCounter();

  // Get the showToast function from the custom hook
  const { showToast } = useToastNotification();

  /**
   * Handles the increment button click by calling the increment function.
   */
  const handleClick = () => {
    increment();
  };

  // Effect hook to show the toast notification when the count changes
  useEffect(() => {
    if (count !== 0) {
      // Show the toast with the message and the current count
      showToast("Incremented", count);
    }
  }, [count, showToast]);

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      height="100vh"
      width="100%"
    >
      {/* Header Text */}
      <Text fontSize="3xl" fontWeight="bold" color="gray.800" mb={8}>
        Yendou Counter
      </Text>

      {/* Counter and Button */}
      <HStack spacing={4}>
        <Text color="gray.600" fontSize="md" fontWeight="400">
          Current count
        </Text>
        <Text fontSize="md" fontWeight="bold" color="gray.800">
          {count}
        </Text>
        <Button
          onClick={handleClick}
          size="sm"
          bg="gray.100"
          _hover={{ bg: "gray.200" }}
          color="gray.900"
          fontWeight="400"
          px={3}
          h="28px"
          minW="auto"
          borderRadius="md"
        >
          +1
        </Button>
      </HStack>
    </Flex>
  );
};

export default Counter;
