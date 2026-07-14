"use client"

import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

const CategoryButton = ({ children, href, isActive }) => {
    const router = useRouter();
    const handleCatNavigation = () => {
        router.push(href);
        
    }
    return (
        <Button
        type="button"
        size="sm"
        variant={isActive? 'primary' : 'outline'}
        onPress={handleCatNavigation}>
            {children}
        </Button>
    );
};

export default CategoryButton;