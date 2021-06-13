import axios from "axios"

function ReviewItem ({item, getDbFeedback}) {

    let ID = item.id

    const flagItem = () => {
        console.log(item);
        axios.put(`/fbRouter/${ID}`)
        .then(response => {
            getDbFeedback()
        }).catch(error => {
            console.log('error in PUT', error);
        })
    }




    return (
        <tr>
            <td>
                {item.feeling}
            </td>
            <td>
                {item.understanding}
            </td>
            <td>
                {item.support}
            </td>
            <td>
                {item.comments}
            </td>
            <td>
                <button>Delete</button>
            </td>
            <td>
                <button onClick={flagItem}> flag </button>
                {item.flagged ? '🚩' : ''}
            </td>





        </tr>
    )
}

export default ReviewItem