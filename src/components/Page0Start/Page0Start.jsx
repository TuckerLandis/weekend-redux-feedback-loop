import { Route, HashRouter as Router, Link, useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';

function Page0Start () {
const history = useHistory()

    const handleNext = () => {
        console.log('clicked next');
        history.push('/feeling')

    }

    return (
        <div>
            
            <button onClick={handleNext} className="prompt start-button">Start</button>
        </div>
    )
}

export default Page0Start