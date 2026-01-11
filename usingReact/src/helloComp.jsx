function Hello(){
    const sayHello = () =>{
        console.log("Hello world");
    };

    return(
        <>
            <button onClick={sayHello}>
                Hello!
            </button>
        </>
    );
}

export default Hello;