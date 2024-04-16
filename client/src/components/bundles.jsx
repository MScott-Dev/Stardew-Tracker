import ItemBox from "./itemBox";

const SingleBundle = (props) => {

    const bundles = props.bundles;
    const items = props.donatedItems

    return (
        <section className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4">
            {bundles.map((bundle) => (
                <section key={bundle.name} className='border-2 border-yellow-200 bg-yellow-50 p-3 font-bold w-96 text-center shadow-xl'>
                    <p className="underline">{bundle.name}</p>
                    <ItemBox items={bundle.items[0]}        donated={props.donatedItems} id={props.id}/>
                    <ItemBox items={bundle.items[1]  || ''} donated={props.donatedItems} id={props.id}/>
                    <ItemBox items={bundle.items[2]  || ''} donated={props.donatedItems} id={props.id}/>
                    <ItemBox items={bundle.items[3]  || ''} donated={props.donatedItems} id={props.id}/>
                    <ItemBox items={bundle.items[4]  || ''} donated={props.donatedItems} id={props.id}/>
                    <ItemBox items={bundle.items[5]  || ''} donated={props.donatedItems} id={props.id}/>
                    <ItemBox items={bundle.items[6]  || ''} donated={props.donatedItems} id={props.id}/>
                    <ItemBox items={bundle.items[7]  || ''} donated={props.donatedItems} id={props.id}/>
                    <ItemBox items={bundle.items[8]  || ''} donated={props.donatedItems} id={props.id}/>
                    <ItemBox items={bundle.items[9]  || ''} donated={props.donatedItems} id={props.id}/>
                    <ItemBox items={bundle.items[10] || ''} donated={props.donatedItems} id={props.id}/>
                    <ItemBox items={bundle.items[11] || ''} donated={props.donatedItems} id={props.id}/>
                </section>
            ))}
        </section>
    )
}

export default SingleBundle;