import {FaHotjar} from "react-icons/fa";
import {GiDramaMasks} from "react-icons/gi"
import {FaFortAwesomeAlt} from "react-icons/fa"
import {TbPumpkinScary} from "react-icons/tb"
import {GiMagnifyingGlass} from "react-icons/gi"
import {AiOutlineHeart} from "react-icons/ai"
import {GiBlood} from "react-icons/gi"
import {GiRevolver} from "react-icons/gi"
import {BsEmojiLaughing} from "react-icons/bs"

export const questions = [
    {
        id: 1,
        questionName: 'What is your favourite genre',
    }
    
];

export const genreanswers = [
    {
        id: 1,
        questionAnswer: 'Action',
        icon: <FaHotjar />
    },
    {
        id: 2,
        questionAnswer: 'Drama',
        icon: <GiDramaMasks />
    },
    {
        id: 3,
        questionAnswer: 'Fantasy',
        icon: <FaFortAwesomeAlt />
    },
    {
        id: 4,
        questionAnswer: 'Horror',
        icon: <TbPumpkinScary />
    },
    {
        id: 5,
        questionAnswer: 'Mystery',
        icon: <GiMagnifyingGlass />
    },
    {
        id: 6,
        questionAnswer: 'Romance',
        icon: <AiOutlineHeart />
    },
    {
        id: 7,
        questionAnswer: 'Thriller',
        icon: <GiBlood />
    },
    {
        id: 8,
        questionAnswer: 'Western',
        icon: <GiRevolver />
    },
    {
        id: 9,
        questionAnswer: 'Comedy',
        icon: <BsEmojiLaughing/>
    },
];

