"use client";


import { authClient, useSession } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
  const { data } = useSession();
  const user = data?.user;
  // console.log(user);
  
  const handleSignOut = async () => {
    
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          // router.push('/signin')
          window.location.href = "/signin"
          
        }
      }
    })
  }
  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">pixgen.</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-photos"}>All Photos</Link>
          </li>
          <li>
            <Link href={"/pricing"}>Pricing</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          {user &&
            <div className="flex items-center text-sm gap-3">
              {/* <li><small>{user.name}</small></li> */}
              <Avatar size="sm">
                <Avatar.Image
                  src={user?.image}
                  alt={user?.name}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <Button type="button" variant="danger" onClick={handleSignOut}>Sign Out</Button>
            </div>
          }
          { !user &&
            <ul className="flex items-center text-sm gap-3">
              <li>
                <Link href={"/signup"}>SignUp</Link>
              </li>
              <li>
                <Link href={"/signin"}>SignIn</Link>
              </li>
            </ul>
          }
        </div>
      </nav>
    </div>
  );
};

export default Navbar;