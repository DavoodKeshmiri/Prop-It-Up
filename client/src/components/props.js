const Props = (props) => {
    console.log (props.name)
    return(
        <div>
            <h2>hello world</h2>
            <h2>{props.name}</h2>
        </div>
    )
}
export default Props