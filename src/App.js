import logo from './logo.svg';
import './App.css';
import React from 'react';
import ZipybotIcons from './icons/Zipybot Icon Square.png';
import Loader from './icons/loader.svg';
import SuccessIcon from './icons/check-circle.svg';

const redirect_uri = 'https://toolsqa.zipy.ai/zipy-bot';
const client_id = '2124581498389.4635448255920';
const client_secret = 'eca7c408b545cb574ade79b7e1d3c49f';

function App() {

  const [state, setState] = React.useState('initial');

  React.useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if(query.get('code')) {

      setState('loading');

      fetch(`https://slack.com/api/oauth.v2.access?code=${query.get('code')}&client_id=${client_id}&client_secret=${client_secret}&redirect_uri=${redirect_uri}`)
      .then(res => {
        setState('success');
        console.log(res)
      })
      .catch(e => {
        setState('success');
        console.log(e)
      })
    }

  }, [])

  const addToWorkspace = () => {
    
  }

  return (
    <div className="App">
      <div className='content'>
        <div className='header'>
          <div className='icon'>
            <img src={ZipybotIcons} alt='icon' width={92} height={92} />
          </div>
          <div className='title-container'>
            <div className='title'>
              Zipy Bot
            </div>
            <div className='subtitle'>
              Ask anything
            </div>
           {state === 'initial' &&
           <a href={`https://slack.com/oauth/v2/authorize?scope=commands&redirect_uri=${redirect_uri}&client_id=${client_id}`}>
              <div className='add-to-slack-button'>
                Add To Workspace
              </div>
           </a>
            }
            {state === 'loading' && 
              <div className='subtitle loading'>
                  <img src={Loader} alt='loading' />
                  Please wait
              </div>
            }
            {state === 'success' &&
             <div className="success">
              <img src={SuccessIcon} alt='check' />
              Successfully Added
            </div>
            }
          </div>
        </div>
        <div className='details-container'>
          <p>Use the power of Chat GPT in your slack Workspace via Zipy Bot</p>

          <p>Add the bot to your workspace to use chat GPT anywhere.</p>
          <p>Stuck somewhere? Need quick answers? Just type /askzipy before your question and get instant answers.</p>
          <p>How to Use?</p>
          <ul className='points'>
            <li>Add bot to your workspace by clicking the "Add To Workspace" button</li>
            <li>Authorize Zipy Bot to add to your workspace</li>
            <li>In any conversation just type command <code>/askzipy</code> and ask anything</li>
            <li>Get amazing replies from Zipy Bot!!!</li>
          </ul>
          <br />
          <p>If you are just looking to have some fun, check out /askmeanzipy and get yourself roasted.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
