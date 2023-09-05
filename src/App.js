import { useEffect, useState } from 'react'
import './style.css';
import Popup from './Popup'

const App = () => {
  const [player_ch, set_player_ch] = useState('letsplay')
  const [CPU_ch, set_CPU_ch] = useState('letsplay')
  const [result, set_result] = useState(null)
  const [player_points, set_player_points] = useState(0)
  const [total_result, set_total_result] = useState(null)
  const [cpu_points, set_cpu_points] = useState(0)
  const [disable, set_disable] = useState(false);
  const [is_open, set_open] = useState(false)
  const [name, set_name] = useState("");
  const choices = ['ROCK', 'PAPER', 'SCISSORS']

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You are logged in: ${name}`);
  }


  const on_button_click = (value) => {
    set_player_ch(value)
    get_random_number()
    {/*set_player_points(player_points)
      set_cpu_points(cpu_points)*/}
    console.log('player:', value)
  }

  function refreshPage() {
    window.location.reload(false);
  }

  const get_random_number = () => {
    const rand = Math.floor(Math.random() * 3)
    const random_number = choices[rand]
    set_CPU_ch(random_number)
    console.log('cpu:', random_number)
  }

  useEffect(() => {
    {
      {
        switch (player_ch + CPU_ch) {
          case 'SCISSORSPAPER':
          case 'ROCKSCISSORS':
          case 'PAPERROCK':
            set_result('YOU WIN ROUND!')
            set_player_points(player_points + 1)
            if (player_points >= 9) {
              set_total_result('PLAYER WINS!')
              set_disable(true)
            }
            console.log('player points:', player_points)
            console.log('cpu points:', cpu_points)
            break
          case 'PAPERSCISSORS':
          case 'SCISSORSROCK':
          case 'ROCKPAPER':
            set_result('YOU LOSE ROUND!')
            set_cpu_points(cpu_points + 1)
            if (cpu_points >= 9) {
              set_total_result('CPU WINS!')
              set_disable(true)
            }
            console.log('player points:', player_points)
            console.log('cpu points:', cpu_points)
            break
          case 'ROCKROCK':
          case 'PAPERPAPER':
          case 'SCISSORSSCISSORS':
            set_result('ITS A DRAW!')
            console.log('player points:', player_points)
            console.log('cpu points:', cpu_points)
            break
        }
      }
    }
  }, [CPU_ch, player_ch])

  const togglePopup = () => {
    set_open(!is_open);
  }

  return (
    <div>
      <header>
        <div class='left-link'>
          <form onSubmit={handleSubmit}>
            <label>Enter your name:
              <input
                type="text"
                value={name}
                onChange={(e) => set_name(e.target.value)}
              />
            </label>
            <input type="submit" value='SUBMIT' />
          </form>
        </div>

        <div class='right-link'>
          <button class = 'button-howto' onClick={togglePopup}>How to play</button>

          <div className="Pop">
            {is_open && <Popup
              handleClose={togglePopup}
              content={<div>
                <h4><p>In this game you choose Rock, Paper or Scissors. Then the CPU choose his option</p>
                <p>Then, the game is compering results</p>
                <p>Rock beats Paper</p>
                <p>Paper beats Rcok</p>
                <p>Scissor beats Rock</p>
                <p>You got 1 point for win</p>
                <p>First person who get 10 points wins!</p>
                </h4>
                
              </div>}
            />}
          </div>
        </div>
      </header>


      <section class='choice-image'>


        <div class='column'>
          <img class='image-choice' src={require(`../images/${player_ch}.png`)} />
          <h2>Player points: {player_points}</h2>
        </div>

        <div class='column'>
          <img class='image-choice' src={require(`../images/${CPU_ch}.png`)} />
          <h2>CPU points: {cpu_points}</h2>
        </div>


      </section>

      <div class='player-buttons'>
        {choices.map((choice, index) =>
          <button class = 'button-player' disabled={disable} key={index} onClick={() => on_button_click(choice)}>{choice}</button>
        )}
        <h2>{result}</h2>
        <h1>{total_result}</h1>
      </div>

      <div class='reset-button'>
        <h3>Reset</h3>
        <div>
          <button class = 'button-player' onClick={refreshPage}>Play Again</button>
        </div>
      </div>



      <div class="footer">
        <p>Andrzej Sokolowski R00184058</p>
      </div>

    </div>
  )
}

export default App
