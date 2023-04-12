export class CustomError extends Error {
    statusCode = 500;
    constructor(statusCode: number, message: any) {
        super(message);
        this.statusCode = statusCode;
    }
}
