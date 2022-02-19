import React from 'react'
import { Text, Container, Button, Box, Image, Table } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

function Detail_description_7() {
    return (
      <Container>
        <Link to='/'>
          <Button  bgColor='white' size='xs' bgColor='blue.200' borderColor='blue.200' height='40px'
          width='140px' borderRadius='40px' _hover={{bg: 'blue.300', borderColor:'blue.300'}} color='gray'>トップページに戻る</Button>
        </Link>
        <br /><br /><br />
        <Text>内容：プログラミングまとめサイト</Text>
        <Text>以下のリンクから遷移できます</Text>
        <a href='https://if-talks.web.app/' target='blank'>
          <Button  bgColor='white'
            size='xs' bgColor='orange.200' borderColor='orange.200' height='40px' width='140px' borderRadius='40px' _hover={{bg: 'orange.300', borderColor:'orange.300',}} color='gray'>ポートフォリオをみる</Button>
        </a>
        <div>
          <Box h="1000px" mt="-6" mx="-6" pos="relative">
            <div>
            <br/><br/>
              <p>
                勉強した内容を活かして一番良いポートフォリオになるように作成中です。
              </p>
              <Box bg="white" boxShadow="xl" rounded="xl" p="6" overflow="hidden">
                <p className='workdetai_matome_site__title'>
                  現段階の機能
                </p>
                <p>
                  ユーザー機能：メール認証
                </p>
                <p>
                  記事投稿機能：FirebaseのStorage、
                  <br/>
                  　　　　　画像プレビュー
                </p>
                <p>
                一覧表示、詳細ページ、編集、削除
                </p>
              </Box>
            </div>
          </Box>
        </div>
      </Container>
    )
}

export default Detail_description_7