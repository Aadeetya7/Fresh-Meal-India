import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            count2: 2
        }

    }
    render() {

        const { count, count2 } = this.state
        const { name, location } = this.props
        return (
            <>
                <h1>
                    This is user class
                    {count}
                    {count2}
                </h1>
                <h2>{name}</h2>
                <h2>{location}</h2>
            </>
        )
    }
}

export default UserClass;