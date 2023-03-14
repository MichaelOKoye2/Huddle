import '../styles/landingpage.css';
import React from 'react'

const Seconddiv = () => {
  return (
    <div className='middle-container'>
    <div className="boxone">
        <div className="grow-img"></div>
        <h1 className='grow'>Grow Together</h1>
        <p className='grow'>You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.</p>
    </div>

    <div className="boxtwo">
    <div className="convo-img"></div>
        <h1 className="convo">Flowing Conversations</h1>
        <p className="convo">You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.</p>
    </div>

    <div className="boxthree">
    <div className="user-img"></div>
        <h1 className="users">Your Users</h1>
        <p className="users">It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.</p>
    </div>

    <div className="boxfour">
        <h1 className='bottom-h1'>Ready To Build Your Community?</h1>
        <button className='btn3'>Get Started For Free</button>

    </div>
    
    
    
    </div>
  );
}

export default Seconddiv;


