import { ADD_ITEM } from "../utils/mutations";
import { useMutation } from '@apollo/client';




const ItemBox = ({items, donated}) => {
    // Use the useMutation hook for Add item mutation
    const [addItem] = useMutation(ADD_ITEM);

    const donateButton = async (event) => {
        event.preventDefault();
        
        const itemID = items._id
        const mutationResponse = await addItem({
            variables: { _id: "6618a2574b2c05f99bac2594", donatedItems: itemID },
            });
        const name = items._id;
        const nameSection = document.getElementById(name);
        nameSection.classList.add('line-through');
        nameSection.classList.add('text-green-600');
    }
    const donatedArray = [...donated];

if (items.name === undefined) {
    return
} if (donatedArray.includes(items._id) ) {
    return (
        <div>
            <section  className='flex justify-center m-2 shadow-lg'>
                <section className='border-2  border-yellow-200 bg-yellow-50 p-3 size-14'>
                    <img src={items.imageName} alt={items.name}></img>
                </section>
                <section id={items._id} className='border-t-2 border-b-2 border-yellow-200 text-sm bg-yellow-50 text-green-600 p-3 font-bold flex content-center flex-wrap h-14 w-48 line-through'>
                    <p value={items._id}>{items.name} </p>
                </section>
                <section className='border-2 border-yellow-200 bg-yellow-50 p-3 flex justify-center content-center flex-wrap h-14'>
                    <button type="button" className='border-2 border-yellow-200 bg-yellow-100  h-8 content-center flex flex-wrap' onClick={donateButton}>
                        Donate!
                    </button>
                </section>
            </section>
        </div>
    )
} else {
    return (
        <div>
            <section  className='flex justify-center m-2 shadow-lg'>
                <section className='border-2  border-yellow-200 bg-yellow-50 p-3 size-14'>
                    <img src={items.imageName} alt={items.name}></img>
                </section>
                <section id={items._id} className='border-t-2 border-b-2 border-yellow-200 text-sm bg-yellow-50 p-3 font-bold flex content-center flex-wrap h-14 w-48'>
                    <p value={items._id}>{items.name} </p>
                </section>
                <section className='border-2 border-yellow-200 bg-yellow-50 p-3 flex justify-center content-center flex-wrap h-14'>
                    <button type="button" className='border-2 border-yellow-200 bg-yellow-100  h-8 content-center flex flex-wrap' onClick={donateButton}>
                        Donate!
                    </button>
                </section>
            </section>
        </div>
    )
}
    
}

export default ItemBox;