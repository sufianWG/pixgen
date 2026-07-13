import { Button, Card, Separator } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { IoMdDownload } from 'react-icons/io';

const PhotoCard = ({ photo }) => {
    console.log(photo);
    return (
        <div>
            <Card>
                <div className='relative w-full aspect-square'>
                    <Image
                        src={photo.imageUrl}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt={photo.title}
                        className='object-cover rounded-xl'>
                    </Image>
                </div>
                <h1 className='text-xl font-bold'>{photo.title}</h1>
                <div className='flex gap-3 items-center'>
                    <div className='flex gap-3'>
                        <FaHeart className='text-xl' />
                        <span>{photo.likes}</span>
                    </div>
                    <Separator orientation='vertical'> </Separator>
                    <div className='flex gap-3'>
                        <IoMdDownload className='text-xl' />
                        <span>{photo.downloads}</span>
                    </div>
                </div>
                <Button className='w-full' variant='outline'>View</Button>
            </Card>
        </div>
    );
};

export default PhotoCard;