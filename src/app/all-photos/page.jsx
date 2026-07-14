import CategoryButton from '@/components/Button/CategoryButton';
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
                    <CategoryButton href={'/all-photos'} isActive={!category}>All</CategoryButton>
                    {
                        photosCategory.map(cat => {
                            return <CategoryButton key={cat.id} href={`?category=${cat.name}`} isActive={cat.name === category}>{cat.name}</CategoryButton>
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