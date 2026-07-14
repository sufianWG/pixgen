import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { IoMdDownload } from 'react-icons/io';

const FullDetails = ({ photo }) => {
    return (
        <div className='container mx-auto '>
            <Card>
                <div className='relative max-w-[80vw] w-[95vw] h-[40vw]'>
                    <Image
                        src={photo.imageUrl}
                        fill
                        sizes="(max-width: 768px) 100vw, 100vw"
                        alt={photo.title}
                        className='object-cover rounded-xl'>
                    </Image>
                </div>
                <h1 className='text-xl font-bold'>{photo.title}</h1>
                <div>
                    <h3 className='text-lg font-bold'>Used Prompt:</h3>
                    <p className='text-base font-medium'>{photo.prompt}</p>
                </div>
                <div>
                    <p className='text-sm font-bold'>Category: <span className='font-medium'>{photo.category}</span> </p>
                </div>
                <div>
                    <p className='text-sm font-bold'>Model: <span className='font-medium'>{photo.model}</span> </p>
                </div>
                <div>
                    <p>Tags:</p>
                    <div className='flex gap-2'>
                    {
                        photo.tags.map((tag, ind) => <Chip key={ind}>{tag}</Chip>)
                    }
                    </div>
                </div>
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
            </Card>
        </div>
    );
};

export default FullDetails;