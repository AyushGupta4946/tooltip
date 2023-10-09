import Tooltip from './components/tooltip/Tooltip';
import './App.css'

const App = () => {
  return (
    <div className='main'>
      <Tooltip position="bottom" text="Hi I am a Tooltip">
        <button>Hover me</button>
      </Tooltip>
      
    </div>
  );
};

export default App;
