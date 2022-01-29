import React from 'react'
import { Box, Flex, Heading, Text, Stack, Avatar, Image, SimpleGrid, Container, Button, textDecoration } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

function Detail_description_1() {
    return (
      <Container>
        <Link to='/'>
          <Button  bgColor='white' 
            size='xs' bgColor='blue.200' borderColor='blue.200' height='40px' width='140px' borderRadius='40px' _hover={{bg: 'blue.300', borderColor:'blue.300'}} color='gray'>トップページに戻る</Button>
        </Link>
        <br /><br /><br />
        <Text>写真投稿アプリ</Text>
        <Text>以下のリンクから遷移できます</Text>
        <a href='https://postphotoes-project.herokuapp.com/' target="_blank">
          <Button  bgColor='white'
            size='xs' bgColor='orange.200' borderColor='orange.200' height='40px' width='140px' borderRadius='40px' _hover={{bg: 'orange.300', borderColor:'orange.300',}} color='gray'>ポートフォリオをみる</Button>
        </a>
        <br/><br/>
        <hr/>
        <br/>
        <Text>学んだ内容↓</Text>
        <Text>シリアライザー、countメソッド、体裁の整え方等</Text>
        <br/>
        <hr/>
        <br/>
        <Text>参考にした書籍↓</Text>
        <a href='https://www.amazon.co.jp/Django-Web%E3%82%A2%E3%83%97%E3%83%AA%E9%96%8B%E7%99%BA%E5%AE%9F%E8%A3%85%E3%83%8F%E3%83%B3%E3%83%89%E3%83%96%E3%83%83%E3%82%AF-%E3%83%81%E3%83%BC%E3%83%A0%E3%83%BB%E3%82%AB%E3%83%AB%E3%83%9D/dp/479805545X/ref=pd_vtp_6/355-8185250-5267807?pd_rd_w=YGAiE&pf_rd_p=949e26f5-c2ef-4c96-bfde-49d7614d0317&pf_rd_r=H81PYM5ABMDR2DXNXS5Y&pd_rd_r=0627baa8-667b-4a68-9f1e-befd04f53c87&pd_rd_wg=Rl6yY&pd_rd_i=479805545X&psc=1'>
          <Image
            fallbackSrc={`${process.env.PUBLIC_URL}/images/django_stady_hand_book.jpg`}
            layout="fill" className='work_image' />
        </a>
      </Container>
    )
}

export default Detail_description_1