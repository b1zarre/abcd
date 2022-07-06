import React from 'react'
import {
  ChakraProvider,
  Grid,
  Breadcrumb,
  Button,
  Checkbox,
  Switch
} from '@chakra-ui/react'

const App = () => (
  <ChakraProvider resetCSS>
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      <Breadcrumb />
      <Button variant="solid" size="md">
        Button text
      </Button>
      <Button variant="solid" size="md">
        Button text
      </Button>
      <Button variant="solid" size="md">
        Button text
      </Button>
      <Button variant="solid" size="md">
        Button text
      </Button>
      <Button variant="solid" size="md">
        Button text
      </Button>
      <Checkbox isReadOnly>Label checkbox</Checkbox>
      <Switch />
    </Grid>
  </ChakraProvider>
)

export default App
