import logo from './logo.svg';
import './App.css';
import React from 'react';
import ZipybotIcons from './icons/tower.png';

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
              Zipy Watch Tower
            </div>
            <div className='subtitle'></div>
              <div className='add-to-slack-button'>
                Coming soon
              </div>
          </div>
        </div>
        <div className='details-container'>
          <p>ZipyWatchTower is an open to use tool for improving the quality of websites. You can run it for any website and can see Insight Information of that webpage. You can runh ZipyWatchTower from chrome dev tool.</p>
          <p>Run ZipyWatchTower in Chrome DevTools</p>
          <ul className='points'>
            <li>Open the Google chrome, If it is not downloaded in your system download it.</li>
            <li>Open the web url for which you want to see the performance Insights and then open the chrome dev tool.</li>
            <li>Click the ZipyWatchTower Tab.</li>
            <li>To start Recording of your session click on the StartRecording button</li>
            <li>Then do some activity on the web pages.</li>
            <li>After that click on the stop recording button</li>
            <li>In some time It will generate a report which will give you the information of webpage.</li>
          </ul>
          <br />
          <p>Performance Insight Information It provides</p>
          <ul className='points'>
            <li>Longet task by navigation url and there count</li>
            <li>Network api insight </li>
            <ul className='points'>
              <li>CompressionStatus of request.</li>
              <li>CacheStatus of data.</li>
              <li>Top 5 slowest api insight information.
</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
