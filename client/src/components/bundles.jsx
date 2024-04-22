import ItemBox from "./itemBox";

const SingleBundle = (props) => {

    const bundles = props.bundles;

    return (
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {bundles.map((bundle) => (
                <section key={bundle.name} className='border-2 border-yellow-200 bg-yellow-50 p-3 dark:text-black font-bold w-auto text-center shadow-xl'>
                    <p className="underline text-lg">{bundle.name}</p>
                    <p className="flex justify-end italic">Required: {bundle.required}</p>
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