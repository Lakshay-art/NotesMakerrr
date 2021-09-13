import './App.css';

import Main from './components/Main';
// import 'bootstrap/dist/bootstrap.min.css';

var notes=[
  {
    id: 2,
    img: 'https://croatia.hr/sites/default/files/styles/image_full_width/public/2017-08/02_01_slide_nature.jpg?itok=ItAHmLlp',
    title: 'How ',
    description: 'Are you today?   Best of Luck!  	',
  }, 

  {
    id: 1,
    img: '',
    title: ':)',
    description: 'Hello',
  }, 

  {
    id: 3,
    img: 'Reset.png',
    title: 'Dbl Reset',
    description: 'Double Click on Reset to clear the input as well as hide the input fields'
  }, 

  {
    id: 4,
    img: 'Reset.png',
    title: 'Reset',
    description: 'Click on Reset to clear the input',
  }, 

  {
    id: 5,
    img: 'TakeNotes.png',
    title: 'Take Notes',
    description: 'Click on Take Notes to input your note',
  },

  {
    id: 6,
    img: 'All Notes.png',
    title: 'All Notes',
    description: 'Takes you to the notes',
  }, 

  {
    id: 7,
    img: 'About Us.png',
    title: 'About Us',
    description: 'Get to know us on social platforms',
  },

  {
    id: 8,
    img: 'https://croatia.hr/sites/default/files/styles/image_full_width/public/2017-08/02_01_slide_nature.jpg?itok=ItAHmLlp',
    title: 'How to Hide Tutorial Notes??',
    description: '1.Click on any tutorial note  </br> 2.A Hide Tutorial Button will appear </br>  3.Click the button to hide/show',
  }, 
  {
    id: 9,
    img: 'Open.png',
    title: 'Open',
    description: 'Visit the Website or Page',
  }, 


 
  
];


function App() {
  return (
    <div className="App">
      
      <Main id="main" notes={notes}>
		
	  </Main>
    </div>
  );
}

export default App;
