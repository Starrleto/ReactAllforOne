const fetchData = async (link) => {
    const promise = await fetch(link);
    const data = await promise.json();
    print(data);
    return data;
}