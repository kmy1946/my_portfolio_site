import {
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import { useModal } from 'react-hooks-use-modal';
import Contact from '../contact/Contact'

function Prof() {
  const [Modal, open, close, isOpen] = useModal('root',{
    preventScroll: true,
  });
  return (
          <Center py={6} paddingBottom={10} marginTop='150px' className='prof' id='profile'>
            <Box className='prof_box' maxW={'470px'} w={'full'} boxShadow={'2xl'} rounded={'lg'} p={10} textColor='black'>
              <Avatar borderRadius='100px' src={`${process.env.PUBLIC_URL}/images/icon_cat.png`} size={'xl'} alt={'Avatar Alt'} />
              <Text fontWeight={600} color={'gray.600'} mb={4}>
                神谷 洋介
              </Text>
              <Text textAlign={'center'} px={3}>
                  学校：信州大学理学部
              </Text>
              <Text textAlign={'center'} px={3}>
                  趣味：読書、お笑い鑑賞
              </Text>
              <br/>
              <Text textAlign={'center'} px={3}>
                  Python(Django, Flask)、Javascript(React.js)
              </Text>
              <Text textAlign={'center'} px={3}>
                  休学中の大学生です。<br/><br/>　Webサービスを作れるようになりたいと思い、プログラミングの勉強をしています。
              </Text>
              <Stack mt={8} direction={'row'} spacing={4}>
                <div>
                  <Button 
                    flex={1} fontSize={'sm'} rounded={'full'} bg={'yellow.300'} color={'white'}
                     _hover={{bg: 'yellow.500',}} _focus={{ bg: 'yellow.500',}}
                    onClick={open}>
                      <i className="fa fa-pencil-alt fa-1x text-white rounded icon" aria-hidden="true"> Contact in dialog</i>
                  </Button>
                  <Modal>
                    <Button width='680px' top='90px' size='xs' bgColor='orange.300' borderColor='orange.300' _hover={{bg: 'orange.400', borderColor:'orange.300'}} onClick={close}>
                        Close
                    </Button>
                    <Contact />
                  </Modal>
                </div>
                <Button flex={1} fontSize={'sm'} rounded={'full'} bg={'blue.400'} color={'white'}
                  boxShadow={
                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                  } _hover={{bg: 'blue.500',}} _focus={{ bg: 'blue.500',}}>
                  <Link href='https://github.com/kmy1946/' target="_blank">
                    <i className="fab fa-github fa-1x text-white rounded icon"> Github link</i>
                  </Link>
                </Button>
              </Stack>
            </Box>
        </Center>
  );
}
export default Prof

