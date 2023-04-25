import { Box, Text } from '@chakra-ui/react'
import MInHeader from '../components/minheader/MInHeader'
import WithAuth from '../utils/WithAuth'

// eslint-disable-next-line react-refresh/only-export-components
function Orders() {
    <MInHeader name={"Orders"} />
  return (
    <Box>
        <MInHeader name={"Orders"} />
        <Box>
            <Text>Your Order has succefully completed</Text>
        </Box>
    </Box>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default WithAuth(Orders)