function RidiculousReviews(props) {
    const { UserId, Username, Email, RegistrationDate } = props

    return (
        <div>
            <h2>UserId: {UserId}</h2>
            <h1>Username : {Username}</h1>
            <p>Email: {Email}</p>
            <p>Reg.Date: {RegistrationDate}</p>
        </div>
    )
}

export default RidiculousReviews