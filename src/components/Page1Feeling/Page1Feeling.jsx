import { Route, HashRouter as Router, Link, useHistory } from 'react-router-dom';

function Page1Feeling () {
const history = useHistory()

    const handleNext = () => {
        console.log('clicked next');
        history.push('/understanding')

    }

    return (
        <div>
            <p>feeling</p>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default Page1Feeling