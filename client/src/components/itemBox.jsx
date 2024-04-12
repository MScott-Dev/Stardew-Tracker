import { ADD_ITEM } from "../utils/mutations";
import { useMutation } from '@apollo/client';


const ItemBox = ({items}) => {
    // Use the useMutation hook for Add item mutation
    const [addItem] = useMutation(ADD_ITEM);
  
    
    const donateButton = async (event) => {
        event.preventDefault();
        
        const itemID = items._id
        const mutationResponse = await addItem({
            variables: { _id: "6618a2574b2c05f99bac2594", donatedItems: itemID },
            });

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