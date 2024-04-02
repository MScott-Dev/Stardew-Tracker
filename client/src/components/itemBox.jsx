import Horseradish from '../assets/images/Wild_Horseradish.png'

const ItemBox = () => {

    

     
    return (
        <section className='flex justify-center'>
            <section className='border-2  border-yellow-200 bg-yellow-50 p-3 size-16'>
                <img src={Horseradish} alt="Horseradish"></img>
            </section>
            <section className='border-t-2 border-b-2 border-yellow-200 bg-yellow-50 p-3 font-bold flex content-center flex-wrap'>
                <p>Wild Horseradish</p>
            </section>
            <section className='border-2  border-yellow-200 bg-yellow-50 p-3 size-16 flex justify-center content-center flex-wrap'>
                <form>
                    <input
                    type='checkbox'
                    value={true}
                    name='donated'
                    className=''>
                    </input>
                </form>
            </section>
        </section>
    )

}

export default ItemBox;