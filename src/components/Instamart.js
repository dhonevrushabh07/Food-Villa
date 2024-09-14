import { useState } from "react"
const Section = ({ title, description, isVisible, setIsvisible }) => {
    // const [isVisible, setIsvisible] = useState(false)
    return (
        <div className="border border-black p-2 m-2">
            <h1 className="font-bold">{title}</h1>
            {
                isVisible ? <button onClick={() => {
                    setIsvisible(false)
                }}>Hide</button> : <button onClick={() => {
                    setIsvisible(true)
                }}>Show</button>
            }
            {isVisible && <p>{description}</p>}
        </div>
    )
}

const Instamart = () => {
    const [isVisible, setIsvisible] = useState("about")
    return (
        <>
            <Section isVisible={isVisible === "about"} setIsvisible={() => setIsvisible("about")} title={"Instamart About"} description={"xyz"} />
            <Section isVisible={isVisible === "description"} setIsvisible={() => setIsvisible("description")} title={"Instamart Team"} description={"xyz"} />
            <Section isVisible={isVisible === "details"} setIsvisible={() => setIsvisible("details")} title={"Instamart Details"} description={"xyz"} />

        </>
    )
}

export default Instamart