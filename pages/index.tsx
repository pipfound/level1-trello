import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Input, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useState } from 'react'
`import Section from '../src/components/Checklist'`
import Section from '../src/components/Section'

// []  => array 배열
// {} => 객체
// 문자 숫자 불리언 


const Home: NextPage = () => {
  return (
    <>
    <NextSeo
      title='예진 첫 페이지'
      openGraph={{
        title: '투두리스트',
        description: '첫 과제',
        images: [{ url: 'https://i.pinimg.com/564x/37/a9/ba/37a9bae77ee5444e40a8d0649fd0144f.jpg' }]
      }} /><Box bgImage="url('/image/02.png')" backgroundPosition="center" backgroundSize="cover"
        display="flex" justifyContent="space-between" p={4} height={"100vh"}>
        <Section title="To Do" />
        <Box w={4} />
        <Section title="Doing" />
        <Box w={4} />
        <Section title="Done" />
      </Box>
      </>
  )
}

export default Home
