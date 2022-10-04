import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Input, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useState } from 'react'
`import Section from '../src/components/Checklist'`
import Section from '../src/components/Section'

// []  => array 배열
// {} => 객체
// 문자 숫자 불리언 


const Home: NextPage = () => {
  return (
    <Box bgImage="url('/image/02.png')" backgroundPosition="center" backgroundSize="cover" 
    display="flex" justifyContent="space-between" p={4} height={"100vh"}>
      <Section title="To Do" />
      <Box w={4} />
      <Section title="Doing" />
      <Box w={4} />
      <Section title="Done" />
    </Box>
  )
}

export default Home
