import './app-header.css';

const AppHeader = () => {
    return (
        <header className="app-header">
            <div>
                <img alt="logo"></img>
            </div>
            <nav className='nav-header'>
                <p className="HomeBtn"><a class="aBtns" >Home</a></p>
                <p className="contactsBtn"><a class="aBtns" href="#contacts">Contact</a></p>
                <p className="experBtn"><a class="aBtns" >Experince</a></p>
                <p className="portBtn"><a class="aBtns" href="#portfolio">Portfolio</a></p>

                
            </nav>
        </header>
    )
} 

export default AppHeader