import { useState, useEffect } from 'react';
import './App.css';
import icon from './images/icon1.png';
import music from './images/music.png';
import education from './images/education.png';
import social from './images/social.png';
import recreational from './images/recreation.png';
import busywork from './images/busywork.png';
import relaxation from './images/relax.png';
import cooking from './images/cooking.png';
import charity from './images/charity.png';
import diy from './images/diy.png';


function Home() {

    const [activity, setActivity] = useState("");
    const [type, setType] = useState("");
    const [participants, setParticipants] = useState("1");
    const [image, setImage] = useState("");
    const [like, setLike] = useState(Math.floor(Math.random() * 999));
    const [isClicked, setIsClicked] = useState(false);
    
    const handleClick = () => {
        if (isClicked) {
          setLike(like - 1);
        } else {
          setLike(like + 1);
        }
        setIsClicked(!isClicked);
      };

    useEffect( () => {
        getActivity();

    }, [])


    const getActivity = async () => {
        const responce = await fetch('https://www.boredapi.com/api/activity/');
        const data = await responce.json();
        const activityIcon = document.querySelector("#activityIcon");
        //console.log(data);
       
        setActivity(data.activity);
        setType(data.type);
        setParticipants(data.participants);
        setImage(activityIcon);

        if (data.type === "music") {
            activityIcon.setAttribute('src' , music)
        }
        else if (data.type === "social") {
            activityIcon.setAttribute('src' , social)
        }
        else if (data.type === "recreational") {
            activityIcon.setAttribute('src' , recreational)
        }
        else if (data.type === "busywork") {
            activityIcon.setAttribute('src' , busywork)
        }
        else if (data.type === "relaxation") {
            activityIcon.setAttribute('src' , relaxation)
        }
        else if (data.type === "cooking") {
            activityIcon.setAttribute('src' , cooking)
        }
        else if (data.type === "education") {
            activityIcon.setAttribute('src' , education)
        }
        else if (data.type === "charity") {
            activityIcon.setAttribute('src' , charity)
        }
        else if (data.type === "diy") {
            activityIcon.setAttribute('src' , diy)
        }
    }



    return (
        <div className='container'>
            <div className='heading-top'>
                <h1>BoreNoMore</h1>
                <p className='par'>Escape Boredom with Your Ultimate Entertainment Companion</p>
            </div>

            

            <form className='btnform'>
                <button className='btn' onClick={ () => getActivity() }>
                    Find some activity
                </button>
            </form>

            <div className='mainActivity'>
                <p className='type' >Type of activity : <span className='color'> { type } </span>  </p>
                <img id='activityIcon' src={ icon }  alt="icon" width="100px" height="100px" />
                <p className='type' > { participants === 1  ?  "for " +  participants   + " person" : "for " +  participants  + " people" }</p>
                
                <div className='starBox'>
                    <svg className='star' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg className='star' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg className='star' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg className='star' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg className='star' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                </div>
                
                <p className='activity'> { activity } </p>
                
                <div className='starBox'>
                    <p className='like'> { like } </p>
                    <button className='btn-like' onClick={ handleClick } > 
                        <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg>
                    </button>
                </div>
                <div className='footer'>
                    <p>Developed by Hanna Slesarska</p>
                    <a href="https://www.365cons.com/">Icons: 365cons.com</a>
                </div>
            </div>


        </div>
    )
}
export default Home;