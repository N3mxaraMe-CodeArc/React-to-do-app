function Mapping() {
    const list=[1,2,3,4,5,6]
    // const list2=list.map((number)=>number**2)
    // console.log(list2);
    const listItems = list.map((number)=><li>{number}</li>)
    return(
        <div>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default Mapping;