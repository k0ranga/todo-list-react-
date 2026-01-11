function Child({sendDataNew}){
    return(
        <button onClick={() => sendDataNew("hello Parent")}>
            Send Data From Child
        </button>
    );
}

export default Child;