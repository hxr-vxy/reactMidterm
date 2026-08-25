import {Link} from 'react-router-dom'

function Confirmation() {

    const message = "Succesfully Registered waa ka!"
    let confirm = alert(message)
    return(
        <div>
            <p>{confirm}</p>
            <Link to="/">Home</Link>
        </div>
    )
}

export default Confirmation