import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const mini_projects = [
  {
    id: uuidv4(),
    name: 'PlayStore Rating Prediction',
    desc:
      'Prediction the ratings of apps on Playstore using Jupyter.',
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: 'MineSweeper',
    desc:
      'Game built using Java.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Todo List',
    desc:
      'A web app built using react that simply tracks your todo list.',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Snake Game",
    desc:
      'Game built using Python.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Insurance Management System',
    desc:
      'Stimulating a insurance management system using MySql.',
    img: UTrackerImg,
  }
];

export default mini_projects;
