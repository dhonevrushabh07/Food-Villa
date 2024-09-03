import React from "react";
class ProfileClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count1: 0,
            count2: 0,
        }
    }

    render() {
        const { count1 } = this.state
        return <>
            <h2>Hello {this.props.name + " " + this.props.lastName}</h2>
            <h2>This is class based component</h2>
            {/* This count1 is after state destucturings */}
            <h2>Count1 : {count1}</h2>
            <h2>Count2 : {this.state.count2}</h2>
            <button onClick={() => {
                this.setState({
                    count1: this.state.count1 + 1
                })
            }}>Increase count by 1</button>
            <button onClick={() => {
                this.setState({
                    count2: this.state.count2 + 2
                })
            }}>Increase count by 2</button>
        </>
    }
}
export default ProfileClass