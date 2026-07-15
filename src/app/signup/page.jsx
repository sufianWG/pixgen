"use client"

import { authClient } from '@/lib/auth-client';
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const SignUpPage = () => {
    const router = useRouter();
    const onSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formValues = Object.fromEntries(formData.entries());
        const {name, email, imgurl, password } = formValues
        // console.log(email, imgurl, password);
        const { data, error } = await authClient.signUp.email({
            name,
            email,
            image: imgurl,
            password,
        });
        console.log(data, error);
        if (!error){
            router.push('/signin')
        }
    };
    const handleLoginWGoogle = async() => {
        await authClient.signIn.social({
            provider: "google",
        });
        // console.log(data);
    }
    return (

        <div className='mx-auto mt-5 max-w-96'>
            <Form
                className="flex mx-auto w-96 flex-col gap-4" onSubmit={onSubmit}
            >
                <TextField
                    isRequired
                    name="name"
                    type="text"
                    
                >
                    <Label>Name</Label>
                    <Input placeholder="Your Name" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    name="imgurl"
                    type="url"
                >
                    <Label>Image Url</Label>
                    <Input placeholder="url" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>
                <div className="flex gap-2">
                    <Button type="submit">
                        Sign Up
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
            <div className='mt-3'>
                <Button variant='outline' className={'w-full text-base rounded-full'} onClick={handleLoginWGoogle}> <FaGoogle></FaGoogle> Sign In With Google</Button>
            </div>
        </div >


    );
};

export default SignUpPage;