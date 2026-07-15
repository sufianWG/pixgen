"use client"
import UpdateUserModal from '@/components/UpdateUserModal';
import { useSession } from '@/lib/auth-client';
import { Card} from '@heroui/react';
import Image from 'next/image';


const ProfilePage = () => {
    const {data} = useSession();
    const user = data?.user
    
    // const userImg = String(user?.image)

    const imageUrl = typeof user?.image === "string" && user?.image.trim() !== "" ? user.image : "/default-avatar-profile.webp"
    return (
        <div className='container mx-auto'>
            <Card className='mx-auto max-w-120 p-5 mt-20' >
                <div className='relative w-30 h-30 mx-auto aspect-square'>
                    <Image
                        src={imageUrl}
                        fill
                        sizes="(max-width: 768px) calc(100vw-2rem), (max-width: 1200px) 50vw, 33vw"
                        alt="user photo"
                        className='object-cover rounded-xl'>
                    </Image>  
                </div>
                <div className='mx-auto text-center'>
                    <h3 className='text-xl font-bold'>{user?.name}</h3>
                    <p>{user?.email}</p>
                </div>
                <div className='mx-auto'>
                    <UpdateUserModal></UpdateUserModal>
                </div>
            </Card>
        </div>
    );
};

export default ProfilePage;