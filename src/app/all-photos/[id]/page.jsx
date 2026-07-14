import FullDetails from '@/components/FullDetails';
import PhotoCard from '@/components/PhotoCard';
import { PhotosApi } from '@/lib/api';
import React from 'react';

const PhotoDetailPage = async({params}) => {
    const {id} = await params;
    // console.log(id);
    const PhotosData = await PhotosApi();
    const targetedPhoto = PhotosData.find(target=> parseInt(target.id) === parseInt(id))
    console.log(targetedPhoto);
    return (
        <div className='container mx-auto'>
            <FullDetails photo={targetedPhoto}></FullDetails>
        </div>
    );
};

export default PhotoDetailPage;