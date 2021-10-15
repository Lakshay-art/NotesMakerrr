import './App.css';

import Main from './components/Main';
import UseRefuseEffect from './components/UseRefuseEffect';
// import 'bootstrap/dist/bootstrap.min.css';

var notes=[
  {
    id: 2,
    img: 'https://croatia.hr/sites/default/files/styles/image_full_width/public/2017-08/02_01_slide_nature.jpg?itok=ItAHmLlp',
    title: 'How to edit/dublicate a note',
    description: 'Double click on the card you want to edit ,everthing related to that card will appear in the respective fields. Do the necessary changes and save it. Delete the previous one if no longer needed.',
 
  }, 

  {
    id: 1,
    img: '',
    title: ':)',
    description: 'Hello',
  }, 
  {
    id: 11,
    img: 'Style.png',
    title: 'Change the way the app looks!!',
    description: 'Click on style button change view according to your prefrence',
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
    id: 12,
    img: 'http://logo.clearbit.com/clearbit.com?size=101',
    title: 'Clear Bit Logos',
    description: '<a href="https://clearbit.com">Logos provided by Clearbit</a>',
  },

  {
    id: 7,
    img: 'About Us.png',
    title: 'About Us',
    description: 'Get to know us on social platforms',
  },
  {
    id: 10,
    img: 'GetItBack.png',
    title: 'How to get a accidently deleted note back',
    description: 'Just click on "Get it back" button to get upto last 20 deleted notes',
 
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
    <UseRefuseEffect/>
    </div>
  );
}

export default App;
