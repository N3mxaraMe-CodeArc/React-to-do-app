import { useState } from "react";

function Hooks() {

    const [BodyText, setBodyText] = useState('Users')

    return ( 
        <div>
            <div>
                <button>User</button>
                <button>Profile</button>
                <button>Account</button>
                
            </div>
            <h1>{BodyText}</h1>
        </div>
     );
}

export default Hooks;