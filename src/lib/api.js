export const PhotosApi = async() => {
    const res = await fetch('https://pixgen-umber-three.vercel.app/data.json');
    const PhotosData = res.json();
    return PhotosData
}

export const PhotosCategoryApi = async() => {
    const res = await fetch('https://pixgen-umber-three.vercel.app/category.json');
    const PhotosCategoryData = res.json();
    return PhotosCategoryData
}