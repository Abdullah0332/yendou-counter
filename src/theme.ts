import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Inter, system-ui, sans-serif",
    heading: "Inter, system-ui, sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "400",
      },
    },
    Text: {
      baseStyle: {
        fontFamily: "Inter, system-ui, sans-serif",
      },
    },
  },
});

export default theme;
