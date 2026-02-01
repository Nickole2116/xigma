const LeftSubNav = () => {
    const list = [
        'Apple', 'Banana', 'Orange', 'Pinapple', 'Kiwi', 'Strawberry', 'Grape', 'Grapefruit',
        'Apple', 'Banana', 'Orange', 'Pinapple', 'Kiwi', 'Strawberry', 'Grape', 'Grapefruit',
        'Apple', 'Banana', 'Orange', 'Pinapple', 'Kiwi', 'Strawberry', 'Grape', 'Grapefruit',
        'Apple', 'Banana', 'Orange', 'Pinapple', 'Kiwi', 'Strawberry', 'Grape', 'Grapefruit',
        'Apple', 'Banana', 'Orange', 'Pinapple', 'Kiwi', 'Strawberry', 'Grape', 'Grapefruit',
        'Apple', 'Banana', 'Orange', 'Pinapple', 'Kiwi', 'Strawberry', 'Grape', 'Grapefruit',
        'Apple', 'Banana', 'Orange', 'Pinapple', 'Kiwi', 'Strawberry', 'Grape', 'Grapefruit',
        'Apple', 'Banana', 'Orange', 'Pinapple', 'Kiwi', 'Strawberry', 'Grape', 'Grapefruit',
        'Apple', 'Banana', 'Orange', 'Pinapple', 'Kiwi', 'Strawberry', 'Grape', 'Grapefruit',
        'Apple', 'Banana', 'Orange', 'Pinapple', 'Kiwi', 'Strawberry', 'Grape', 'Grapefruit',
        'Apple', 'Banana', 'Orange', 'Pinapple', 'Kiwi', 'Strawberry', 'Grape', 'Grapefruit',
        'Apple', 'Banana', 'Orange', 'Pinapple', 'Kiwi', 'Strawberry', 'Grape', 'Grapefruit',
        'Apple', 'Banana', 'Orange', 'Pinapple', 'Kiwi', 'Strawberry', 'Grape', 'Grapefruit',
    ];


    return <>
        {list.map((item, index) => (
        <div key={index}>{item}</div>
        ))}
    </>;
}

export default LeftSubNav;