import logo from './logo.svg';
import './App.css';
import React from 'react';
import ZipybotIcons from './icons/Zipy Plug & Play.png';

const redirect_uri = 'https://add-slack-bot.vercel.app';
const client_id = '2124581498389.4635448255920';
const client_secret = 'eca7c408b545cb574ade79b7e1d3c49f';

function App() {


  return (
    <div className="App">
      <div className='content'>
        <div className='header'>
          <div className='icon'>
            <img src={ZipybotIcons} alt='icon' width={92} height={92} />
          </div>
          <div className='title-container'>
            <div className='title'>
              Zipy Plug & Play
            </div>
            <div className='subtitle'>
              Catch, report, and fix bugs faster.
            </div>
              <div className='add-to-slack-button'>
                Coming soon
              </div>
          </div>
        </div>
        <div className='details-container'>
          <p>Now Catch, report, and fix bugs faster.</p>

          <p>Record screen and technical logs on your product. Report and fix bugs faster.</p>
          <p>How often does it happen that an engineer can't reproduce the bug and therefore fix it? Developers spend 2-6 hours a day on technical issues. And it's a lot of back and forth with the bug reporter. That's more time spent on bugs than developing great features. Here's how Zipy is changing that.</p>
          <p>How to Use?</p>
          <ul className='points'>
            <li>Download and Install Zipy Plug n Play Plugin</li>
            <li>Click on Start once you are ready to start recording the session.</li>
            <li>Click on Stop to stop recording the session.</li>
            <li>And Voila you have all the records.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
