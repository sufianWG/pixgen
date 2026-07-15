"use client"
import { useSession } from '@/lib/auth-client';
import { Card} from '@heroui/react';
import Image from 'next/image';


const ProfilePage = () => {
    const {data} = useSession();
    const user = data?.user
    console.log(user);
    return (
        <div className='container mx-auto'>
            <Card className='mx-auto max-w-120 p-5 mt-20' >
                <div className='relative w-full aspect-square'>
                    <Image
                        src={user?.image}
                        fill
                        sizes="(max-width: 768px) calc(100vw-2rem), (max-width: 1200px) 50vw, 33vw"
                        alt={user?.name}
                        className='object-cover rounded-xl'>
                    </Image>  
                </div>
                <div className='mx-auto text-center'>
                    <h3 className='text-xl font-bold'>{user?.name}</h3>
                    <p>{user?.email}</p>
                </div>
            </Card>
        </div>
    );
};

export default ProfilePage;