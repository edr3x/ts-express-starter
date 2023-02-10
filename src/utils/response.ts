export function successResponse(data: any) {
    return { success: true, data };
}

export function failureResponse(message: any) {
    return { success: false, message };
}
