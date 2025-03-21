import { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Text,
  useColorModeValue,
  AspectRatio,
} from '@chakra-ui/react';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import Card from 'components/card/Card';

export default function Product(props: {
  image: string;
  name: string;
  price: number
}) {
  const { image, name, price } = props;
  const [like, setLike] = useState(false);
  const textColor = useColorModeValue('navy.700', 'white');
  const textColorBid = useColorModeValue('brand.500', 'white');

  return (
    <Card p="20px">
      <Flex direction={{ base: 'column' }} justify="center">
        <Box mb={{ base: '20px', '2xl': '20px' }} position="relative">
          <AspectRatio ratio={7 / 5}>
            <Image src={image} w={'100%'} borderRadius="20px" alt="" />
          </AspectRatio>

          <Button
            position="absolute"
            bg="white"
            _hover={{ bg: 'whiteAlpha.900' }}
            _active={{ bg: 'white' }}
            _focus={{ bg: 'white' }}
            p="0px !important"
            top="14px"
            right="14px"
            borderRadius="50%"
            minW="36px"
            h="36px"
            onClick={() => {
              setLike(!like);
            }}
          >
            <Icon
              transition="0.2s linear"
              w="20px"
              h="20px"
              as={like ? IoHeart : IoHeartOutline}
              color="brand.500"
            />
          </Button>
        </Box>

        <Flex flexDirection="column" justify="space-between" h="100%">
          <Flex
            justify="space-between"
            direction={{
              base: 'row',
              md: 'column',
              lg: 'row',
              xl: 'column',
              '2xl': 'row',
            }}
            mb="auto"
          >
            <Text
              color={textColor}
              fontSize={{
                base: 'xl',
                md: 'lg',
                lg: 'lg',
                xl: 'lg',
                '2xl': 'md',
                '3xl': 'lg',
              }}
              mb="5px"
              fontWeight="bold"
              me="14px"
            >
              {name}
            </Text>
          </Flex>

          <Flex
            align={{
              base: 'center',
              md: 'start',
              lg: 'center',
              xl: 'start',
              '2xl': 'center',
            }}
            justify="space-between"
            direction={{
              base: 'row',
              md: 'column',
              lg: 'row',
              xl: 'column',
              '2xl': 'row',
            }}
          >
            <Text fontWeight="700" fontSize="sm" color={textColorBid}>
              Price: {price} $
            </Text>
            <Button
              variant="darkBrand"
              color="white"
              fontSize="sm"
              fontWeight="500"
              borderRadius="70px"
              px="24px"
              py="5px"
            >
              Add to Cart
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
