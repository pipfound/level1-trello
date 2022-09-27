import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Input, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { title } from 'process'
import { useState } from 'react'
import background from "/Users/j/study/src/image/02.jpeg"
import { text } from 'stream/consumers'
import { setEnvironmentData } from 'worker_threads'
import styles from '../styles/Home.module.css'
import { url } from 'inspector'

// []  => array 배열
// {} => 객체
// 문자 숫자 불리언 


const Home: NextPage = () => {
  const [valueTodo, setValueTodo] = useState('');
  const [valueDoing, setValueDoing] = useState('');
  const [valueDone, setValueDone] = useState('');
  const [valueBacklog, setValueBacklog] = useState('');
  const [dataTodo, setDataTodo] = useState<{ title: string }[]>([]);
  const [dataDoing, setDataDoing] = useState<{ title: string }[]>([]);
  const [dataDone, setDataDone] = useState<{ title: string }[]>([]);
  const [dataBacklog, setDataBacklog] = useState<{ title: string }[]>([]);
  
  const addTodo = () => {
    dataTodo.push({
      title: valueTodo,
    })
    setDataTodo([...dataTodo]);
    console.log(dataTodo);
    setValueTodo('')
  }
  const addDoing = () => {
    dataDoing.push({
      title: valueDoing,
    })
    setDataDoing([...dataDoing]);
    console.log(dataDoing);
    setValueDoing('')
  }
  const addDone = () => {
    dataDone.push({
      title: valueDone,
    })
    setDataDone([...dataDone]);
    console.log(dataDone);
    setValueDone('')
  }
  const addBacklog = () => {
    dataBacklog.push({
      title: valueBacklog,
    })
    setDataBacklog([...dataBacklog]);
    console.log(dataBacklog);
    setValueBacklog('')
  }

  const removeTodo = (title:string) => {
    const result = dataTodo.filter(value => value.title !== title)
    setDataTodo(result)
  }
  const removeDoing = (title:string) => {
    console.log(dataDoing);
    const result = dataDoing.filter(value => value.title !== title)
    setDataDoing(result)
  }
  const removeDone = (title:string) => {
    console.log(dataDone);
    const result = dataDone.filter(value => value.title !== title)
    setDataDone(result)
  }
  const removeBacklog = (title:string) => {
    console.log(dataBacklog);
    const result = dataBacklog.filter(value => value.title !== title)
    setDataBacklog(result)
  }

  return (
    <Accordion defaultIndex={[0]} allowMultiple display={'flex'} fontFamily={'PyeongChangPeace-Light'}>
      <AccordionItem width={'25%'}>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              Todo
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
         <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}> 
          <Input value={valueTodo} onChange={(e) => setValueTodo(e.currentTarget.value)} />
          <Button onClick={addTodo}>
           +
          </Button>
        </Box>
          {dataTodo.map((item) => (
            <Box key={item.title} display={'flex'} justifyContent={'space-between'} alignItems={'center'} padding={4} bg="#cab3ff" borderRadius={4} margin={2} color="#000000">
              <Text>{item.title}</Text>
              <Button bg="#ffffcc" color="#000000" onClick={() => removeTodo(item.title)}>
                -
              </Button>
            </Box>
          ))}
        </AccordionPanel>
      </AccordionItem>
  
      <AccordionItem width={'25%'}>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              DOING
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
         <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}> 
          <Input value={valueDoing} onChange={(e) => setValueDoing(e.currentTarget.value)} />
          <Button onClick={addDoing}>
           +
          </Button>
        </Box>
          {dataDoing.map((item) => (
            <Box key={item.title} display={'flex'} justifyContent={'space-between'} alignItems={'center'} padding={4} bg="#cab3ff" borderRadius={4} margin={2} color="#000000">
              <Text>{item.title}</Text>
              <Button bg="#ffffcc" color="#000000" onClick={() => removeDoing(item.title)}>
                -
              </Button>
            </Box>
          ))}
        </AccordionPanel>
      </AccordionItem>
    
      <AccordionItem width={'25%'}>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              DONE
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
         <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}> 
          <Input value={valueDone} onChange={(e) => setValueDone(e.currentTarget.value)} />
          <Button onClick={addDone}>
           +
          </Button>
        </Box>
          {dataDone.map((item) => (
            <Box key={item.title} display={'flex'} justifyContent={'space-between'} alignItems={'center'} padding={4} bg="#cab3ff" borderRadius={4} margin={2} color="#000000">
              <Text>{item.title}</Text>
              <Button bg="#ffffcc" color="#000000" onClick={() => removeDone(item.title)}>
                -
              </Button>
            </Box>
          ))}
        </AccordionPanel>
      </AccordionItem>
  
      <AccordionItem width={'25%'}>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              BACKLOG
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
         <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}> 
          <Input value={valueBacklog} onChange={(e) => setValueBacklog(e.currentTarget.value)} />
          <Button onClick={addBacklog}>
           +
          </Button>
        </Box>
          {dataBacklog.map((item) => (
            <Box key={item.title} display={'flex'} justifyContent={'space-between'} alignItems={'center'} padding={4} bg="#cab3ff" borderRadius={4} margin={2} color="#000000">
              <Text>{item.title}</Text>
              <Button bg="#ffffcc" color="#000000" onClick={() => removeBacklog(item.title)}>
                -
              </Button>
            </Box>
          ))}
        </AccordionPanel>
      </AccordionItem>
  
  </Accordion>
  )
}

export default Home
