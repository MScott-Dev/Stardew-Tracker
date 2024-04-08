const SingleBundle = (props) => {

    const bundles = props.bundles;
    console.log(bundles[0].items[0])
    return (
        <section className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
            {bundles.map((bundle) => (
                <section key={bundle.name} className='border-2 border-yellow-200 bg-yellow-50 p-3 font-bold w-80 text-center shadow-xl'>
                    <p>{bundle.name}</p>
                </section>
                
            ))}
        </section>
    )
}

export default SingleBundle;