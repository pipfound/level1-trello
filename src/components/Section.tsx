import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { AddIcon, CheckIcon, CloseIcon, DeleteIcon, EditIcon, HamburgerIcon, SmallAddIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Heading, Input, Text, Editable, EditableInput, EditableTextarea,EditablePreview, useEditableControls, ButtonGroup, IconButton, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Checkbox } from '@chakra-ui/react'
import { reverse } from 'dns';
import { useEffect, useState } from 'react';
import Checklist from '/Users/j/study/study02/src/components/Checklist'

type TaskType = {
    id: number;
    title: string;
    description: string;
    todos: string[];
  }

export default function Section({ title: sectionTitle }: { title: string }) {
  const [valueTask, setValueTask] = useState('');
  const [dataTask, setDataTask] = useState<{ title: string, todos: string[] }[]>([])
  const [currentId, setCurrentId] = useState(-1);
  const [description, setDescription] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure()

  const addTask = () => {
    console.log(valueTask);
    // unshift는 추가한 순서대로, push는 밑으로 쌓이게
    setDataTask([...dataTask, {
      title: valueTask,
      todos: [],
    }]);

    setValueTask('');
  }

  const removeTask = (title: string) => {
    const result = dataTask.filter(value => value.title !== title)
    setDataTask([...result])
  }
  

  return (
    <>
      <Box bg={'#FFFFFF'} flex={1} borderRadius={4} p={4} height={"max-content"} fontFamily={'KyoboHandwriting2020A'}>
        <Heading fontSize={20} color={'#8843F2'} fontFamily="inherit" mb={4}>{sectionTitle}</Heading>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
          <Input value={valueTask} onChange={(e) => setValueTask(e.currentTarget.value)} placeholder='내용을 입력해 주세요.' />
          <Button onClick={addTask}>
            <SmallAddIcon />
          </Button>
        </Box>
        {dataTask.map((item, index) => (
          <Box key={index}
            display={'flex'} justifyContent={'space-between'} alignItems={'center'} padding={4}
            bgGradient={'linear(to-tl, #FFBCD1, #DBCEFF)'} borderRadius={4} margin={2} color="#000000">
            <Box display={'flex'} alignItems={'center'}>
            <Checkbox colorScheme="gray" padding={1} />
            <Editable padding={1} defaultValue={item.title}>
              <EditablePreview />
              <EditableInput />
            </Editable>
            </Box>
            <Box>
              <Button bgGradient={'linear(to-tl, #8843F2, #448DFB)'} justifySelf={'end'} color="#000000" margin={1} onClick={() => removeTask(item.title)}>
                <DeleteIcon />
              </Button>
            </Box>
          </Box>
        ))}
      </Box>

    </>
  )
}
