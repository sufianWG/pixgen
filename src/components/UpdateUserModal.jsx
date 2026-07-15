"use client"

import { authClient } from '@/lib/auth-client';
import { Button, Form, InfoIcon, Input, Label, Modal, TextField } from '@heroui/react';
import React from 'react';
import { FaEdit } from 'react-icons/fa';

const UpdateUserModal = () => {
    const handleUpdateData = async (e) => {
        e.preventDefault();
        // const name = e.target.name.value;
        const formData = new FormData(e.currentTarget);
        const formValues = Object.fromEntries(formData.entries());
        const { name, image } = formValues;
        console.log(name, image);
        
        await authClient.updateUser({
            name,
            image
        });
        // console.log(data, error);
    }
    return (

        <Modal>
            <Button variant="secondary"> <FaEdit></FaEdit>Update Profile</Button>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-[360px]">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-default text-foreground">
                                <InfoIcon className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Update profile info </Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleUpdateData}>
                                <TextField className="w-full" name="name" type="text">
                                    <Label>Change Name</Label>
                                    <Input placeholder="Enter your name" />
                                </TextField>
                                <TextField className="w-full" name="image" type="url">
                                    <Label>Image url</Label>
                                    <Input placeholder="image url" />
                                </TextField>
                                <Button type='submit' className="w-full" slot="close">
                                    Change
                                </Button>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>

    );
};

export default UpdateUserModal;
