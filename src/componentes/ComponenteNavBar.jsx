function ComponenteNavBar(props) {
    return (
        <div style={{
                display: "flex",
                flexDirection: "row",
            }}  
            >
            <button><a style={{ textDecoration:"none" }} href="#">{props.titulo}</a></button>
        </div>
    );
}

export { ComponenteNavBar };