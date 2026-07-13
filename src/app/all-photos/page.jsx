import PhotoCard from '@/components/PhotoCard';
import { PhotosApi } from '@/lib/api';

const AllPhotosPage = async() => {
    const PhotosData = await PhotosApi();
    // console.log(PhotosData);
    return (
        <div className='container mx-auto mt-5'>
            <h1 className='text-lg font-bold'>All Photos</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3'>
                {
                    PhotosData.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default AllPhotosPage;