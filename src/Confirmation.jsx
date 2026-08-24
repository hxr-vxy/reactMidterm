import {Link} from 'react-router-dom'

function Confirmation() {

    const message = "Succesfully Registered waa ka!"
    return(
        <div>
            <p>{message}</p>
            <Link to="/">Home</Link>
        </div>
    )
}

export default Confirmation