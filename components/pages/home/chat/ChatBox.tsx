/* eslint-disable react/jsx-key */
import React,{useState, useRef, createRef} from 'react'
import { Box ,Text, Input, CloseButton, Image} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import data from './chatData';
import {postLead} from '@modules/LandingPage/Services/LeadGeneration.Service'

export default function ChatBox() {
    const inputRef = useRef();

    const [steps, setSteps] = useState<number>(0);
    const [info, setInfo] = useState<[]>([]);
    const [open, setOpen] = useState<boolean>(false);

    const {handleSubmit, register, reset, formState:{errors, isSubmitting}} = useForm()
    const onSubmit = async(values:any) => {
        inputRef.current[0].value = '';
        if (steps <8) {

            setSteps((prev) => prev + 1);
        }
        if (steps === 8) {
            await postLead(values);
        }
        console.log(values);
        if (steps === 0) {
            let temp = [
                {
                    values: values.firstName
                }
            ]
            setInfo(temp)
        } else if (steps === 1) {
            let temp = [...info]
            let tempInfo = [
                {
                    values: values.lastName
                }
            ]
            temp.push(...tempInfo);
            setInfo(temp);
        } else if (steps ===2) {
             let temp = [...info]
            let tempInfo = [
                {
                    values: values.email
                }
            ]
            temp.push(...tempInfo);
            setInfo(temp);
        } else if (steps===3){
             let temp = [...info]
            let tempInfo = [
                {
                    values: values.phoneNo
                }
            ]
            temp.push(...tempInfo);
            setInfo(temp);
        }else if (steps===4){
             let temp = [...info]
            let tempInfo = [
                {
                    values: values.preferDestination
                }
            ]
            temp.push(...tempInfo);
            setInfo(temp);
        }else if (steps===5){
             let temp = [...info]
            let tempInfo = [
                {
                    values: values.startDate
                }
            ]
            temp.push(...tempInfo);
            setInfo(temp);
        } else if (steps===6){
             let temp = [...info]
            let tempInfo = [
                {
                    values: values.officeLocation
                }
            ]
            temp.push(...tempInfo);
            setInfo(temp);
        }else if (steps===7){
             let temp = [...info]
            let tempInfo = [
                {
                    values: values.preferCounsel
                }
            ]
            temp.push(...tempInfo);
            setInfo(temp);
        } else if (steps===8){
             let temp = [...info]
            let tempInfo = [
                {
                    values: values.studyLevel
                }
            ]
            temp.push(...tempInfo);
            setInfo(temp);
        }
    }
    
    return (
        <Box>
             {open ? <Box boxShadow={'0 2px 4px rgba(0,0,0,.08),0 4px 12px rgba(0,0,0,.08)'} zIndex='99' height='480' borderRadius='1rem' backgroundColor='#ffffff' width='350px' bottom='0' right='20px' position='fixed' as='section'>
            <Box  p='20px' borderBottom='1px solid #dbdbdb' display='flex' justifyContent='space-between'>
            <Text fontWeight='600' >Want to register?</Text>
            <CloseButton onClick={(e) => setOpen(false)}/>
            </Box>
            <Box p={5} maxH='320px' overflowY='scroll'>
<Box fontSize='13px' mr='30px'   px='15px' py='10px' borderRadius='5' color='#000000' background='#dbdbdb'>
            {data[0]?.question}
</Box>
            {info.map((res,index) => ( <Box key={index}>
                <Box px='15px' my='20px' fontSize='13px' ml='30px'  py='10px' borderRadius='5' color='#ffffff' background='#622AE8'>
                {res.values}
                </Box>
                <Box fontSize='13px' mr='30px'   px='15px' py='10px' borderRadius='5' color='#000000' background='#dbdbdb'>{data[index + 1]?.question}</Box>
            </Box>
            ))}
            </Box>
            <Box>
                <form ref={inputRef} onSubmit={handleSubmit(onSubmit)}>
                <Input  {...register(data[steps].value)}  border='none' placeholder='Type Here...' borderTop='1px solid #dbdbdb' height='80px' padding='15px' marginTop='60px' position='absolute' bottom='10px' right='0' />
                </form>
            </Box>
        </Box> : <Box zIndex='99' cursor='pointer' onClick={() => setOpen(true)} bottom='20px' right='50px' position='fixed' as='section'>
        <Image alt='message-icon' height={100} width={100} src='208-2085764_svg-royalty-free-stock-messages-png-image-purepng.png'></Image>
        </Box>
        }
        </Box>
    )
}
