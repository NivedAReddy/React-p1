import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRadomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const descriptions = reactDescriptions[genRadomInt(2)];
    return(
  <div>
  <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {descriptions} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  </div>);
  }