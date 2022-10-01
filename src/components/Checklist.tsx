import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { AddIcon, CheckIcon, CloseIcon, DeleteIcon, EditIcon, SmallAddIcon } from '@chakra-ui/icons';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Heading, Input, Text, Editable, EditableInput, EditableTextarea,EditablePreview, useEditableControls, ButtonGroup, IconButton, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Checkbox } from '@chakra-ui/react'
import { reverse } from 'dns';
import { useState } from 'react';

type TaskType = {
    id: number;
    title: string;
    description: string;
  }

export default function Section({ title: sectionTitle }: { title: string }) {
    const [valueTask, setValueTask] = useState('');
    const [dataTask, setDataTask] = useState<{ title: string }[]>([])
    const [currentId, setCurrentId] = useState(-1);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [Checked, setChecked] = useState()

    //const [modal, setModal] = useState(false);
    
    const addTask = () => {
      // unshift는 추가한 순서대로, push는 밑으로 쌓이게
      dataTask.unshift({
        title: valueTask,
      })
      setDataTask([...dataTask]);
      console.log(dataTask);
      setValueTask('')
    }
  
    const removeTask = (title:string) => {
      const result = dataTask.filter(value => value.title !== title)
      setDataTask(result)
    }
  
  return (
    <>
      <Box bg={'#FFFFFF'} flex={1} borderRadius={4} p={4} height={"max-content"} fontFamily={'KyoboHand'}>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
          <Input value={valueTask} onChange={(e) => setValueTask(e.currentTarget.value)} />
          <Button onClick={addTask}>
            <SmallAddIcon />
          </Button>
        </Box>
        {dataTask.map((item) => (
          <Box key={item.title}
            display={'flex'} justifyContent={'space-between'} alignItems={'center'} padding={2} color="#000000">
            <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
            <Checkbox padding={1} />
            <Text alignItems={'center'}>{item.title}</Text>
            </Box>
            <Button bgGradient={'linear(to-tl, #8843F2, #448DFB)'} justifyContent={'flex-end'} color="#000000" margin={1} onClick={() => removeTask(item.title)}>
              <DeleteIcon w={3} h={3} />
            </Button>
          </Box>
        ))}
      </Box>
      {  }
    </>
  )
}
