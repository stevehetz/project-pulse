export const stringResponse = (status: number, body: string) => {
    return new Response(body, {
        status,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const jsonResponse = (status: number, body) => {
    return new Response(JSON.stringify(body), {
        status,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const errorResponse = (status: number, error: string) => {
    return jsonResponse(status, { error });
};
