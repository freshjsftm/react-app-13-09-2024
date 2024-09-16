import './App.css';
import Heading from './components/Heading';
import Link from './components/Link';
import Paragraf from './components/Paragraf';

function App() {
  const name = 'Anna';
  const isAdult = true;
  return (
    <>
      <h1 className="heading">
        {isAdult ? 'Hello' : 'Hi'}, {name}!
      </h1>
      <Link href="https://google.com" text="google" />
      <Heading titleContent="somesing text" userName={name} />
      <Paragraf content="content for paragraf"/>
      <Heading titleContent="New title" />
      <Paragraf content="text lorem"/>
    </>
  );
}

export default App;
