import React, { useState, useEffect } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.css'

const Profile = () => {

    // Creation de notre state profile
    const [profile, setProfile] = useState({
        fullname: "Cheikh GUEYE",
        bio: "Manguez, bouger ",
        imgSrc: './pp.jpg',
        profession: "HUSTLER",
        show: false
    })

    //creation de notre state timer
    const [timer, setTimer] = useState({
        time: 0
    })

    // FOnction showing permettant de changer la valeur du booleen profile.show en fonction du nombre de clique sur le botton
    const showing = () => {

        profile.show === false ? setProfile(
            {
                show: true,
                fullname: "Cheikh GUEYE",
                bio: "Manguez, bouger ",
                imgSrc: './pp.jpg',
                profession: "HUSTLER",

            }
        ) : profile.show === true && setProfile(
            {
                fullname: "Cheikh GUEYE",
                bio: "Manguez, bouger ",
                imgSrc: './pp.jpg',
                profession: "HUSTLER",
                show: false

            }
        )

    }
    // utilisation de useEffect pour incrementer notre state timer.time
    useEffect(() => {
        var i = 0
        setInterval(() => {
            setTimer({ time: i++ })
        }, 100)
    }, [])

    // fonction qui calcule et affiche le temps en fonction du state timer.time
    const timing = (toto) => {
        
        var mins = Math.floor(toto / 10 / 60)
        var secs = Math.floor(toto / 10 % 60)
        mins < 10 && (mins = "0" + mins)
        secs < 10 && (secs = "0" + secs) 
        return <h1>   {mins} : {secs} </h1> 
    }

    //le rendue
    return (
        <>
            {profile.show === true &&
                <div className="container mt-5 d-flex justify-content-center" >
                    <div className="card p-3" style={card}>
                        <div className="d-flex align-items-center">
                            <div className="image"><img src={profile.imgSrc} alt='profile' /></div>
                            <div className="ml-3 w-100">
                                {profile.fullname}  {profile.profession}
                                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                    {profile.bio}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            }
            <h1 className="btn btn-outline-light btn-lg" style={{ marginLeft: 620, marginTop: 10 }}>{timing(timer.time)}</h1>
            <button className="btn btn-primary btn-lg" style={{ marginLeft: 600, marginTop: 10 }} onClick={showing}>{profile.show ? 'HIDE MY PROFILE' : 'SHOW MY PROFILE'}</button>
        </>
    )

}

const card = {
    width: 400,
    border: null,
    borderRadius: 10,
    backgroundColor: '#fff'
}

export default Profile