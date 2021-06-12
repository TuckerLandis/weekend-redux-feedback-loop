import { Route, HashRouter as Router, Link, useHistory } from 'react-router-dom';

function Page0Start () {
const history = useHistory()

    const handleNext = () => {
        console.log('clicked next');
        history.push('/feeling')

    }

    return (
        <div>
            <p>Start</p>
            <button onClick={handleNext}>Start</button>
        </div>
    )
}

export default Page0Start