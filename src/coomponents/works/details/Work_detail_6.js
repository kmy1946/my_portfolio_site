import React from 'react'
import { Box, Flex, Heading, Text, Stack, Avatar, Image, SimpleGrid } from "@chakra-ui/react";

function Work_detail_6() {
    return (
      <Flex p="3" w="full" maxW="350px" width="255px" className="col">
      <Box bg="white" boxShadow="xl" rounded="xl" p="6" overflow="hidden" className='work_box'>
        <Box h="250px" mt="-6" mx="-6" pos="relative">
          <Image
            fallbackSrc="https://via.placeholder.com/300x200"
            layout="fill"
            className='work_image'
          />
        </Box>
        <Stack>
          <Text
            className='work_skills'
          >
            Flask, ReactJS, HTML, CSS, Chakra UI
          </Text>
          <Heading color="gray.700" fontSize="lg" fontFamily="body">
            ToDoApp
          </Heading>
          <Text color="gray.500" height='80px' fontSize="sm">
            Under Construction!!<br/>・・・
          </Text>
          <Text color="gray.500" fontSize='xs'>Dec 10, 2021</Text>
        </Stack>
      </Box>
    </Flex>
    )
}

export default Work_detail_6