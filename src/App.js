import './App.css';
import PasswordInput from './components/PasswordInput';

function App() {
  return (
    <>
      <div className='wrapper'>
        <span className='heroSpan'>Check your password strength 💪</span>
        <PasswordInput />
      </div>
    </>
  );
}

export default App;
