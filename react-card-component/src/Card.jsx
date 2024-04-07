import profilePic from './assets/gokunew.jpg'

function Card() {
    /* either you use small size image 
    or change it's dimension in css, yes we can 
    change it's dimension in css */
    /* to use css you should have a div with class
    but with jsx we use className instead of class **/
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profilePic"></img>
            <h1 className="card-title"> goku </h1>
            <p className="card-text"> I train on 20x earth's gravity and
                 beat bad guys💪😤👊 </p>
        </div>
    );
}

export default Card



