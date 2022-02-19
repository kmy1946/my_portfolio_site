import React from 'react'
import { Box, Flex, Heading, Text, Stack, Avatar, Image, SimpleGrid, Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

function Work_detail_7() {
    return (
      <Flex p="3" w="full" maxW="350px" width="255px" className="col" >
      <Box bg="white" boxShadow="xl" rounded="xl" p="6" overflow="hidden" className="work_box">
        <Box h="250px" mt="-6" mx="-6" pos="relative">
          <Image
            fallbackSrc={`${process.env.PUBLIC_URL}/images/if_programmer_img.png`}
            
            layout="fill"
            className='work_image'
          />
        </Box>
        <Stack>
          <Text
            className='work_skills'
          >
            FIrebase, react, redux, Material UI, HTML, CSS
          </Text>
          <Text className='work_under_construction' width={230} padding={1.5} >
            Under Construction ・・・
          </Text>
          <Text className='work_auth' width={140} padding={1.5} >
            ユーザー認証
          </Text>
          <Text className='work_importance' width={140} padding={1.5} >
            重要度：MAX
          </Text>
          <Text className='work_remarks' width={120} padding={1.5} >
            非同期処理
          </Text>
          <Link to='/Detail_description_7' className='stretched-link'>
          <Button className='work_detail_button' bgColor='white' position='absolute' right={7}
            size='xs' bgColor='blue.200' borderColor='blue.200' height='40px' width='40px' borderRadius='40px' _hover={{bg: 'blue.300', borderColor:'blue.300'}} color='gray'
            >
            詳細
          </Button>
          </Link>
          <Heading color="gray.700" fontSize="lg" fontFamily="body" >
            Webサイト
          </Heading>
          <Text color="gray.500" height='80px' fontSize="sm" paddingTop={5}>
            現在作成中です。
          </Text>
          <Text color="gray.500" fontSize='xs'>Dec 10, 2021</Text>
        </Stack>
      </Box>
    </Flex>
    )
}

export default Work_detail_7