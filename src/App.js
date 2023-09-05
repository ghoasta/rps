import { useEffect, useState } from 'react'

const App = () => {
  const [player_ch, set_player_ch] = useState(null)
  const [CPU_ch, set_CPU_ch] = useState(null)
  const [result, set_result] = useState(null)
  const [player_points, set_player_points] = useState(0)
  const [total_result, set_total_result] = useState(null)
  const [cpu_points, set_cpu_points] = useState(0)
  const [disable, set_disable] = useState(false);
  const choices = ['rock', 'paper', 'scissors']

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
          case 'scissorspaper':
          case 'rockscissors':
          case 'paperrock':
            set_result('YOU WIN ROUND!')
            set_player_points(player_points + 1)
            if (player_points >= 9) {
              set_total_result('PLAYER WINNS!')
              set_disable(true)
            }
            console.log('player points:', player_points)
            console.log('cpu points:', cpu_points)
            break
          case 'paperscissors':
          case 'scissorsrock':
          case 'rockpaper':
            set_result('YOU LOSE ROUND!')
            set_cpu_points(cpu_points + 1)
            if (cpu_points >= 9) {
              set_total_result('CPU WINNS!')
              set_disable(true)
            }
            console.log('player points:', player_points)
            console.log('cpu points:', cpu_points)
            break
          case 'rockrock':
          case 'paperpaper':
          case 'scissorsscissors':
            set_result('ITS A DRAW!')
            break
        }
      }
    }
  }, [CPU_ch, player_ch])

  return (
    <div>

      <form>
        <label>Username</label>
        <input type='text' name='username'></input><br></br>
        <label>Password</label>
        <input type='text' name='pwd'></input><br></br>
        <input type='submit' value='Submit'></input>
      </form>
      
      <br></br>
      <button>How to play</button>

      <h1>user choice is: {player_ch}</h1>
      <h2>player points: {player_points}</h2>
      <h1>computer choice is: {CPU_ch}</h1>
      <h2>cpu points: {cpu_points}</h2>
      {choices.map((choice, index) =>
        <button disabled={disable} key={index} onClick={() => on_button_click(choice)}>{choice}</button>
      )}
      <h1>{result}</h1>
      <h2>{total_result}</h2>

      <br></br><br></br>
      <h3>Reset</h3>
      <div>
        <button onClick={refreshPage}>Play Again</button>
      </div>

    </div>
  )
}

export default App
