
const ItemBox = ({items}) => {
    
    const donateButton = (event) => {
        event.preventDefault();
        
        const itemID = event.target.value

        console.log(itemID);
    }


if (items.name === undefined) {
    return
} else {
    return (
        <div>
            <section  className='flex justify-center m-2 shadow-lg'>
                <section className='border-2  border-yellow-200 bg-yellow-50 p-3 size-14'>
                    <img src={items.imageName} alt={items.name}></img>
                </section>
                <section className='border-t-2 border-b-2 border-yellow-200 text-sm bg-yellow-50 p-3 font-bold flex content-center flex-wrap h-14 w-48'>
                    <p className="">{items.name} </p>
                </section>
                <section className='border-2 border-yellow-200 bg-yellow-50 p-3 flex justify-center content-center flex-wrap h-14'>
                    <button className='border-2 border-yellow-200 bg-yellow-100  h-8 content-center flex flex-wrap' onClick={donateButton} value={items._id}>
                        Donate!
                    </button>
                </section>
            </section>
        </div>
    )
}
    
}

export default ItemBox;