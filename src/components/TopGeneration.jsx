import { PhotosApi } from '@/lib/api';
import React from 'react';
import PhotoCard from './PhotoCard';

const TopGeneration = async () => {
    const PhotosData = await PhotosApi();
    const topGenPhotos = PhotosData.slice(0, 8);
    // console.log(PhotosData);
    return (
        <div className='container mx-auto mt-5'>
            <h1 className='text-lg font-bold'>Top Generations</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3'>
                {
                    topGenPhotos.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default TopGeneration;