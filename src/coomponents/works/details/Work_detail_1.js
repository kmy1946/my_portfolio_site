import React from 'react'
import { Box, Flex, Heading, Text, Stack, Avatar, Image, SimpleGrid, Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import Detail_description_1 from '../detail_descriptions/Detail_description_1';

function Work_detail_1() {
    return (
      <Flex p="3" w="full" maxW="350px" width="255px" className="col">
      <Box bg="white" boxShadow="xl" rounded="xl" p="6" overflow="hidden" className="work_box">
        <Box h="250px" mt="-6" mx="-6" pos="relative">
          <Image
            fallbackSrc="../work_images/space_garbage.jpg"
            layout="fill"
            className='work_image'
          />
        </Box>
        <Stack>
          <Text className='work_skills' >
            Django, Javascript, HTML, CSS, Google map API
          </Text>
          <Link to='/Detail_description_1' className='stretched-link'>
          <Button className='work_detail_button' bgColor='white' position='absolute' right={7}
            size='xs' bgColor='blue.200' borderColor='blue.200' height='40px' width='40px' borderRadius='40px' _hover={{bg: 'blue.300', borderColor:'blue.300'}} color='gray'
            >
            詳細
          </Button>
          </Link>
          <Heading color="gray.700" fontSize="lg" fontFamily="body" >
            Photo_Post
          </Heading>
          <Text color="gray.500" height='80px' fontSize="sm" paddingTop={5}>
            写真を投稿できます。一番最初に作ったWebアプリです。
          </Text>
          <Text color="gray.500" fontSize='xs'>Oct 8, 2021</Text>
        </Stack>
      </Box>
    </Flex>
    )
}

export default Work_detail_1