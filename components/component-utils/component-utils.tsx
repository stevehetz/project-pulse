'use client';

import { Alert, AlertDescription, AlertIcon, AlertTitle, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';

export const ComponentUtils = props => {
    const [showServerErrorAlert, setShowServerErrorAlert] = useState<String>();
    const toast = useToast();

    const handleServerResponse = async (response: Response, callback) => {
        if (!response.ok) {
            console.error('Error retrieving data: Server responded with status', response.status);
            const body = response.status === 500 ? await response.json() : { error: 'Internal server error' };
            callback(body.error);
            return [];
        }

        try {
            callback(undefined);
            return await response.json();
        } catch (error) {
            console.error('Error parsing response:', error);
            callback('Error reading response from server');
            return [];
        }
    };

    const handleServerResponseAlert = async (response: Response) => {
        return await handleServerResponse(response, setShowServerErrorAlert);
    };

    const handleServerResponseToast = async (response: Response) => {
        return await handleServerResponse(response, description =>
            toast({
                title: 'Error',
                description,
                status: 'error',
                duration: 10000,
                isClosable: true
            })
        );
    };

    const childrenWithProps = React.Children.map(props.children, child =>
        React.cloneElement(child, {
            setShowServerErrorAlert,
            handleServerResponseAlert,
            handleServerResponseToast
        })
    );

    return (
        <>
            {showServerErrorAlert && (
                <Alert
                    status='error'
                    mb={5}>
                    <AlertIcon />
                    <AlertTitle>Server error!</AlertTitle>
                    <AlertDescription>{showServerErrorAlert}</AlertDescription>
                </Alert>
            )}
            {childrenWithProps}
        </>
    );
};
