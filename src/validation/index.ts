import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';

/**
 * Middleware to validate a request property (body, query, or params) against
 * a Zod schema. If the validation succeeds, it calls the next middleware.
 * If the validation fails, it sends a 400 response with the validation errors.
 *
 * @param schema The Zod schema to validate against
 * @param validation The request property to validate (defaults to "body")
 * @returns A middleware function that takes (req, res, next) as arguments
 */
const validate =
    (schema: ZodSchema, validation: 'body' | 'query' | 'params' = 'body') =>
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const parsed = schema.safeParse(req[validation]);

            // If validation passes, proceed to the next middleware
            if (parsed.success) {
                next(); // Just call next, don't return anything.
                return;
            }

            // If validation fails, send a 400 error with the issues
            const errors = parsed.error.issues.map((issue) => ({
                field: issue.path.join('.'),
                message: issue.message,
            }));

            res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors,
            });
            return; // Ensure void return after sending a response
        } catch (error: any) {
            if (error instanceof ZodError) {
                const errors = error.issues.map((issue) => ({
                    field: issue.path.join('.'),
                    message: issue.message,
                }));

                res.status(400).json({
                    success: false,
                    errors,
                });
                return; // Ensure void return after sending a response
            }
            next(error); // Pass errors to the error handler middleware
        }
    };

export default validate;
