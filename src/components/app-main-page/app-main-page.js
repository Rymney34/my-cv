import './app-main-page.css'

const AppMain = () => {
    return(
        <div className="AppMain">
            <div className="aboutMeDiv">
                <div className="whoIam">
                    <img className="imageAvatar" alt='my picture' src=""/>
                    <h2>Timofei Berkut</h2>
                    <hr width="10%" color='green'/>
                    <h1>Software Engineer</h1>
                    <div className='socials'>
                        <a href="https://github.com/TimofeiBerkut" target="_blank"/>
                        <a>Socials</a>
                    </div>
                </div>
                <div className="aboutMe">
                    <h2>About Me</h2>

                    <button>Projects</button>
                    <button>Experience</button>
                    <button>Resume</button>

                    <p>Hello this is just some info about me </p>
                </div>
            </div>
        </div>
    )
}

export default AppMain