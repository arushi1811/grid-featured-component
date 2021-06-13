import './App.css';
import Grid from "./Grid"
import img1 from "./images/1.jpg"
import img2 from "./images/2.jpg"
import img3 from "./images/3.jpg"
import img4 from "./images/4.jpg"
import img5 from "./images/5.jpg"
import img6 from "./images/6.jpg"
import img7 from "./images/7.jpg"
import img8 from "./images/8.jpg"
import img9 from "./images/9.jpg"
import img10 from "./images/10.jpg"
import img11 from "./images/11.jpg"
import img12 from "./images/12.jpg"

function App() {
  return (
    <div className="App">
      <Grid display="grid" space={768} issues={[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12]}/>
    </div>
  );
}

export default App;
