import Nav from "./componant/navbar";

let App = () => {
  return (
    <>
    <Nav logo="Kailash" nav_bar={['home','curses','more','about']}/>
    <Nav logo="Suthar" nav_bar={['Movies','Series','shows','mpre']}/>
    <Nav logo="Kumar" nav_bar={['Kumar','learn','course','conatc us']}/>
    </>
  )
}

export default App;