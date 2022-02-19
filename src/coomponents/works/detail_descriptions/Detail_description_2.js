import React from 'react'
import { Text, Container, Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

function Detail_description_2() {
    return (
      <Container>
        <Link to='/'>
          <Button  bgColor='white' size='xs' bgColor='blue.200' borderColor='blue.200' height='40px'
          width='140px' borderRadius='40px' _hover={{bg: 'blue.300', borderColor:'blue.300'}} color='gray'>トップページに戻る</Button>
        </Link>
        <br /><br /><br />
        <Text>TODOアプリ</Text>
        <Text>以下のリンクから遷移できます</Text>
        <a href='https://todo-prj.herokuapp.com/' target='_blank'>
          <Button  bgColor='white'
            size='xs' bgColor='orange.200' borderColor='orange.200' height='40px' width='140px' borderRadius='40px' _hover={{bg: 'orange.300', borderColor:'orange.300',}} color='gray'>ポートフォリオをみる</Button>
        </a>
      </Container>
    )
}

export default Detail_description_2