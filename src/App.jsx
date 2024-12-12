import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id='challenge'>
      <TimerChallenge title='Easy' TargetTime={1} ></TimerChallenge>
      <TimerChallenge title='Not easy' TargetTime={5} ></TimerChallenge>
      <TimerChallenge title='Getting tough' TargetTime={10} ></TimerChallenge>
      <TimerChallenge title='Pros' TargetTime={15} ></TimerChallenge>
      </div>
    </>
  );
}

export default App;
