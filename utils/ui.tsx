import { HStack, Spinner, Text } from '@chakra-ui/react';

export const ui = {
    http: {
        get: async (url: string) =>
            await fetch(url, {
                method: 'GET'
            }),
        post: async (url: string, body: any) =>
            await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            }),
        put: async (url: string, body: any) =>
            await fetch(url, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            }),
        delete: async (url: string, body?: any) =>
            await fetch(url, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: body && JSON.stringify(body)
            })
    },
    toast: {
        success: (toast: any, message: string) => {
            toast({
                title: 'Success',
                description: message,
                status: 'success',
                duration: 3000,
                isClosable: true
            });
        },
        error: (toast: any, message: string) => {
            toast({
                title: 'Error',
                description: message,
                status: 'error',
                duration: 3000,
                isClosable: true
            });
        }
    },
    loader: () => (
        <HStack
            color='gray.600'
            p={4}
            pt={10}>
            <Text fontSize='16'>Loading data...</Text>
            <Spinner
                size='sm'
                speed='1s'
            />
        </HStack>
    ),
    initDataWithLoader: (setShowLoader: any, initialized: any, fetchData: any) => {
        const fetchWithAsync = async () => {
            setShowLoader(true);
            await fetchData();
            setShowLoader(false);
        };
        if (!initialized.current) {
            initialized.current = true;
            fetchWithAsync();
        }
    }
};
