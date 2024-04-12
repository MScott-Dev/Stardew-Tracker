import ItemBox from "./itemBox";

const SingleBundle = (props) => {

    const bundles = props.bundles;

    return (
        <section className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4">
            {bundles.map((bundle) => (
                <section key={bundle.name} className='border-2 border-yellow-200 bg-yellow-50 p-3 font-bold w-96 text-center shadow-xl'>
                    <p className="underline">{bundle.name}</p>
                    <ItemBox items={bundle.items[0]} />
                    <ItemBox items={bundle.items[1] || ''} />
                    <ItemBox items={bundle.items[2] || ''} />
                    <ItemBox items={bundle.items[3] || ''} />
                    <ItemBox items={bundle.items[4] || ''} />
                    <ItemBox items={bundle.items[5] || ''} />
                    <ItemBox items={bundle.items[6] || ''} />
                    <ItemBox items={bundle.items[7] || ''} />
                    <ItemBox items={bundle.items[8] || ''} />
                    <ItemBox items={bundle.items[9] || ''} />
                    <ItemBox items={bundle.items[10] || ''} />
                    <ItemBox items={bundle.items[11] || ''} />
                </section>
            ))}
        </section>
    )
}

export default SingleBundle;