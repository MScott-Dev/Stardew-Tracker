import { ADD_ITEM, REMOVE_ITEM } from "../utils/mutations";
import { useMutation } from '@apollo/client';




const ItemBox = ({items, donated, id}) => {
    // Use the useMutation hook for Add item mutation
    const [addItem] = useMutation(ADD_ITEM);
    // Use the useMutation hook for Add item mutation
    const [removeItem] = useMutation(REMOVE_ITEM);

    const donateButton = async (event) => {
        event.preventDefault();
        const userId = id
        const itemID = items._id
        const mutationResponse = await addItem({
            variables: { _id: userId, donatedItems: itemID },
            });
        const name = items._id;
        const nameSection = document.getElementById(name);
        nameSection.classList.add('line-through');
        nameSection.classList.add('text-green-600');
    };

    const removeButton = async (event) => {
        event.preventDefault();
        const userId = id
        const itemID = items._id
        const mutationResponse = await removeItem({
            variables: { _id: userId, donatedItems: itemID },
            });
        const name = items._id;
        const nameSection = document.getElementById(name);
        nameSection.classList.remove('line-through');
        nameSection.classList.remove('text-green-600');
    }

    const donatedArray = [...donated];

if (items.name === undefined) {
    return
} if (donatedArray.includes(items._id) ) {
    return (
        <div>
            <section  className='flex justify-center m-2 shadow-lg'>
                <section className='border-2  border-yellow-200 bg-yellow-50 p-3 size-22'>
                    <img src={items.imageName} alt={items.name}></img>
                </section>
                <section id={items._id} className='border-t-2 border-b-2 border-yellow-200 text-sm bg-yellow-50 p-3 font-bold flex content-center flex-wrap h-18 w-48 line-through text-green-600'>
                    <p value={items._id}>{items.name} </p>
                </section>
                <section className='border-2 border-yellow-200 bg-yellow-50 p-3 flex justify-center content-center flex-wrap h-18 gap-2'>
                    <button type="button" className='border-2 border-yellow-200 bg-yellow-100 hover:bg-green-300 h-8 content-center flex flex-wrap' onClick={donateButton}>
                        Donate
                    </button>
                    <button type="button" className='border-2  border-yellow-200 bg-yellow-100 hover:bg-rose-300  h-8 content-center flex flex-wrap' onClick={removeButton}>
                        Remove
                    </button>
                </section>
            </section>
        </div>
    )
} else {
    return (
        <div>
            <section  className='flex justify-center m-2 shadow-lg'>
                <section className='border-2  border-yellow-200 bg-yellow-50 p-3 size-22'>
                    <img src={items.imageName} alt={items.name}></img>
                </section>
                <section id={items._id} className='border-t-2 border-b-2 border-yellow-200 text-sm bg-yellow-50 p-3 font-bold flex content-center flex-wrap h-18 w-48'>
                    <p value={items._id}>{items.name} </p>
                </section>
                <section className='border-2 border-yellow-200 bg-yellow-50 p-3 flex justify-center content-center flex-wrap h-18 gap-2'>
                    <button type="button" className='border-2 border-yellow-200 bg-yellow-100 hover:bg-green-300 h-8 content-center flex flex-wrap' onClick={donateButton}>
                        Donate
                    </button>
                    <button type="button" className='border-2 border-yellow-200 bg-yellow-100 hover:bg-rose-300 h-8 content-center flex flex-wrap' onClick={removeButton}>
                        Remove
                    </button>
                </section>
            </section>
        </div>
    )
}
    
}

export default ItemBox;