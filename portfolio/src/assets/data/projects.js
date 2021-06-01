import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Algorithm Path Visualizer',
    desc:
      'A web app built using React to visualize all the path finding algorithms.',
    img: ProjectImg,
    link: "https://github.com/roshbhaskar/PathVisualizer",
  },
  {
    id: uuidv4(),
    name: 'Linux Shell',
    desc:
      'Implementing a mini Linux Shell using C.',
    img: UTrackerImg,
    link: "https://github.com/roshbhaskar/LinuxShell-",
  },
  {
    id: uuidv4(),
    name: 'Generic RBTs',
    desc:
      'Red Black Trees implementation in C++ using generic programming concepts.',
    img: CoinTrackerImg,
    link: "https://github.com/roshbhaskar/generic-red-black-trees",
  },
  {
    id: uuidv4(),
    name: 'ChatBot',
    desc:
      'A rule based chatbot developed in PySpark using Reddit dataset.',
    img: GreenCtgImg,
    link: "https://github.com/roshbhaskar/ChatBot",
  },
  {
    id: uuidv4(),
    name: 'Logging System',
    desc:
      'Mimicing the logging system dependies in C++ using variations of different Design Patterns.',
    img: UTrackerImg,
    link : "https://github.com/roshbhaskar/loggo",
  },
 
  {
    id: uuidv4(),
    name: "Notes Tracker",
    desc:
      'A web app built using React and Firebase to track and store your notes.',
    img: CavinImg,
    link: "https://github.com/roshbhaskar/TransIt",
  },
];

export default projects;
