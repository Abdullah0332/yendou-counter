import { CheckIcon } from "@chakra-ui/icons";
import { Box, Flex, Text, useToast } from "@chakra-ui/react";

/**
 * Custom hook to trigger a toast notification.
 *
 * @returns {Object} - Returns the `showToast` function to trigger a toast.
 */
const useToastNotification = () => {
  const toast = useToast();

  /**
   * Displays a toast notification with a custom message and counter value.
   *
   * @param message - The message to display in the toast.
   * @param count - The counter value to show in the toast message.
   */
  const showToast = (message: string, count: number): void => {
    toast({
      position: "top-right",
      duration: 2000,
      isClosable: true,
      render: () => (
        <Flex
          align="center"
          p="14px 22px 12px 16px"
          gap="8px"
          bg="radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(116, 200, 152, 0.15) 0%, rgba(116, 200, 152, 0.03) 100%), #46474F"
          boxShadow="0px 0px 0px 1px rgba(40, 41, 50, 0.04), 0px 2px 2px -1px rgba(40, 41, 50, 0.04), 0px 4px 4px -2px rgba(40, 41, 50, 0.04), 0px 8px 8px -4px rgba(40, 41, 50, 0.06), 0px 16px 32px rgba(40, 41, 50, 0.06)"
          borderRadius="8px"
          border="1px solid transparent"
          css={{
            background:
              "radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(116, 200, 152, 0.15) 0%, rgba(116, 200, 152, 0.03) 100%), #46474F",
            borderImage:
              "linear-gradient(0deg, #6F7076, #6F7076), radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(116, 200, 152, 0.65) 0%, rgba(116, 200, 152, 0.1) 100%)",
            borderImageSlice: 1,
          }}
        >
          <Flex
            align="center"
            justify="center"
            w="18px"
            h="18px"
            borderRadius="full"
            color="#74C898"
          >
            <Box
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="50%"
              borderColor="green.500"
              padding="4px"
              borderWidth="2px"
              boxShadow="0px 0px 8px rgba(116, 200, 152, 0.3)"
            >
              <CheckIcon color="green.500" boxSize="8px" />
            </Box>
          </Flex>
          <Flex direction="column" gap="6px" marginLeft="6px">
            <Text
              fontFamily="Inter"
              fontWeight="500"
              fontSize="14px"
              lineHeight="16px"
              color="white"
            >
              {message}
            </Text>
            <Text
              fontFamily="Inter"
              fontWeight="400"
              fontSize="14px"
              lineHeight="16px"
              color="whiteAlpha.800"
            >
              Counter is now {count}
            </Text>
          </Flex>
        </Flex>
      ),
    });
  };

  return { showToast };
};

export default useToastNotification;
