import Wild_Horseradish from '../assets/images/Wild_Horseradish.png';
import Daffodil from '../assets/images/Daffodil.png';
const ItemBox = ({items}) => {



if (items.name === undefined) {
    return
} else {
    
    return (
        <div className=''>
            <section  className='flex justify-center m-2 shadow-lg'>
                <section className='border-2  border-yellow-200 bg-yellow-50 p-3 size-14'>
                    <img src={Daffodil} alt={items.name}></img>
                </section>
                <section className='border-t-2 border-b-2 border-yellow-200 text-sm bg-yellow-50 p-3 font-bold flex content-center flex-wrap h-14 w-48'>
                    <p>{items.name}</p>
                </section>
                <section className='border-2 border-yellow-200 bg-yellow-50 p-3 flex justify-center content-center flex-wrap h-14'>
                    <button className='border-2 border-yellow-200 bg-yellow-100  h-8 content-center flex flex-wrap'>
                        Donate!
                    </button>
                </section>
            </section>
        </div>
    )
}
    
}

export default ItemBox;