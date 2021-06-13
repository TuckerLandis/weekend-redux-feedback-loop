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

    const deleteItem = () => {
        console.log(item);
        axios.delete(`/fbRouter/${ID}`)
        .then(response => {
            getDbFeedback()
        }).catch(error => {
            console.log('error in DEL', error);
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
                <button onClick={deleteItem}>Delete</button>
            </td>
            <td>
                
                {item.flagged ? '🚩' : <button onClick={flagItem}> flag </button>}
            </td>





        </tr>
    )
}

export default ReviewItem