import {Link} from 'react-router-dom'

function Home() {
    return(
        <div>
            <p>Hello, Welcome to eventHub</p>

            <Link to="/events">Events</Link>

        </div>
    )
}

export default Home