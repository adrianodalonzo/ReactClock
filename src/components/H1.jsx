const H1 = ({ value, id }) => {
    return (
        <h1 id={id && id}>{value}</h1>
    );
}
 
export default H1;