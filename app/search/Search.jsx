"use client"

import { Input, Button, InputGroup } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function Search(props) {
    const router = useRouter();

    const [searchTerm, setSearchTerm] = useState("")

    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        setSearchTerm("")
        router.push(`/search/${searchTerm}`);
    }

    return (
        <div>
            <form onSubmit={handleSearchSubmit}>
                <InputGroup>
                    <Input
                    placeholder='Hey, what are you looking for?'
                    onChange={(event) => { setSearchTerm(event.target.value) }}
                />
                <Button type="submit" colorScheme="teal">
                    Search
                </Button>
                </InputGroup>
                
            </form>
        </div>
    );
}

export default Search;