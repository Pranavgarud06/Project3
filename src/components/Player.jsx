import { useState , useRef} from "react";

export default function Player() {
  const [enterPlayerName , SetEnteredName]= useState(null);
  const playerName = useRef();

  function clickHandler() {
    SetEnteredName(playerName.current.value);
    playerName.current.value = '';

  }

  return (
    <section id="player">
      <h2>Welcome {enterPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
