import SmallButton from '@/components/Button/SmallButton';
import PhotoCard from '@/components/PhotoCard';
import { PhotosApi, PhotosCategoryApi } from '@/lib/api';
import Link from 'next/link';

const AllPhotosPage = async ({ searchParams }) => {
    const { category } = await searchParams;
    // console.log(dataFromSearchParams);
    const PhotosData = await PhotosApi();
    const photosCategory = await PhotosCategoryApi();
    // console.log(photosCategory);
    const actualPhotoData = category ? PhotosData.filter(targetPhoto => targetPhoto.category === category) : PhotosData
    // console.log(PhotosData);
    return (
        <div className='container mx-auto mt-5'>
            <div className='mb-5'>
                <div className='flex items-center gap-2'>
                    <Link href={'/all-photos'}>
                        <button className='text-sm px-2 py-1 bg-transparent border text-black font-bold rounded-full transition-all cursor-pointer hover:bg-gray-100'>All</button>
                    </Link>
                    {
                        photosCategory.map(cat => {
                            return <Link href={`?category=${cat.name}`} key={cat.id}>
                                <SmallButton>{cat.name}</SmallButton>
                            </Link>
                        })
                    }
                </div>
            </div>
            <h1 className='text-lg font-bold'>All Photos</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3'>
                {
                    actualPhotoData.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default AllPhotosPage;