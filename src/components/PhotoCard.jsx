import { Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { IoMdDownload } from 'react-icons/io';
import Button from './Button/Button';

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
                    <Chip className='absolute top-2 right-2'>{photo.category}</Chip>
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
                <Link href={`/all-photos/${photo.id}`}>
                    <Button>View</Button>
                </Link>
            </Card>
        </div>
    );
};

export default PhotoCard;