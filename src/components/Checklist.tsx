import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { AddIcon, CheckIcon, CloseIcon, DeleteIcon, EditIcon, SmallAddIcon } from '@chakra-ui/icons';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Heading, Input, Text, Editable, EditableInput, EditableTextarea,EditablePreview, useEditableControls, ButtonGroup, IconButton, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Checkbox } from '@chakra-ui/react'
import { reverse } from 'dns';
import { Dispatch, SetStateAction, useState } from 'react';

type TaskType = {
    id: number;
    title: string;
    description: string;
  }

export default function Section({ setTasks, title: sectionTitle }: { setTasks: Dispatch<SetStateAction<{ title: string; todos: string[] }[]>>; title: string }) {
    const [valueTask, setValueTask] = useState<string>('');
    const [dataTask, setDataTask] = useState<{ todo: string; }[]>([])
    const [currentId, setCurrentId] = useState(-1);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [Checked, setChecked] = useState()

    //const [modal, setModal] = useState(false);
    
    const addTask = () => {
      // unshift는 추가한 순서대로, push는 밑으로 쌓이게
      dataTask.unshift({
        todo: valueTask,
      })
      setDataTask([...dataTask]);

      setTasks((prev) => {
        return [...prev.map((item) => {
          if(item.title === title) {
            return {
              ...item,
              title: item.title,
              todos: [...item.todos, valueTask]
            }
          } else {
            return {
              ...item,
            }
          }
        })]
      })

      setValueTask('');
    }
  
    const removeTask = (title:string) => {
      const result = dataTask.filter(value => value.todo !== title)
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
        {dataTask.map(({todo}) => (
          <Box key={todo}
            display={'flex'} justifyContent={'space-between'} alignItems={'center'} padding={2} color="#000000">
            <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
            <Checkbox colorScheme="gray" padding={1} />
            <Text alignItems={'center'}>{todo}</Text>
            </Box>
            <Button bgGradient={'linear(to-tl, #8843F2, #448DFB)'} justifyContent={'flex-end'} color="#000000" margin={1} onClick={() => removeTask(item.title)}>
              <DeleteIcon w={3} h={3} />
            </Button>
          </Box>
        ))}
      </Box>
    </>
  )
}
