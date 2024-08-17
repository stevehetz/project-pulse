// Logger

import { createLogger, format, transports } from 'winston';
('winston-daily-rotate-file');

// get the printf function from the format module
const { splat, prettyPrint, combine, colorize, printf } = format;

// get the log level for the console from the .env file
const logLevelConsole = process.env.LOG_LEVEL_CONSOLE || 'info';
// get the log level for the file from the .env file
const logLevelFile = process.env.LOG_LEVEL_FILE || 'info';

let consoleFormat;

if (process.env.ENV === 'local') {
    consoleFormat = combine(
        splat(),
        colorize(),
        printf(({ level, message }) => {
            let time = new Date()
                .toISOString()
                .replace('T', ' ')
                .replace('Z', '')
                .split(' ')[1]
                .split('.')[0];
            let label = `${time} ${level} `;
            label += ' '.repeat(Math.max(0, 27 - label.length));
            label += `[${message.name}]:`;
            label += ' '.repeat(Math.max(0, 42 - label.length));
            return `${label} ${message.data}`;
        })
    );
} else {
    consoleFormat = printf(({ level, message }) => {
        let label = `${level} `;
        label += `[${message.name}]:`;
        return `${label} ${message.data}`;
    });
}

// log format for file
const fileFormat = combine(
    splat(),
    printf(({ level, message }) => {
        // get current UTC date time in format YYYY-MM-DD HH:MM:SS
        const dateTime = new Date().toISOString().replace('T', ' ').replace('Z', '');
        const label = `${dateTime} ${level} [${message.name}]:`;
        return `${label} ${message.data}`;
    })
);

export const winstonLogger = createLogger({
    transports: [
        new transports.Console({
            level: logLevelConsole,
            format: consoleFormat
        })
        // new DailyRotateFile({
        //     level: logLevelFile,
        //     filename: 'logs/%DATE%.log',
        //     datePattern: 'YYYY-MM-DD',
        //     maxSize: '20m',
        //     maxFiles: '2d',
        //     format: fileFormat
        // })
    ]
});

export const jsonLogger = createLogger({
    transports: [
        new transports.Console({
            level: logLevelConsole,
            format: prettyPrint()
        })
    ]
});

export interface ILoggerOptions {
    name: string;
}

export class Logger {
    private logger: any;
    private options: ILoggerOptions;

    constructor(options: ILoggerOptions) {
        this.options = options;
        this.logger = winstonLogger;
    }

    private log(type: string, message: string) {
        // this.logger[type](`[${this.options.name}] - ${message}`);
        this.logger[type]({ name: this.options.name, data: message });
    }

    public json(message: any) {
        jsonLogger.debug({ name: this.options.name, data: message });
    }

    public silly(message: string) {
        this.log('silly', message);
    }

    public debug(message: string) {
        this.log('debug', message);
    }

    public verbose(message: string) {
        this.log('verbose', message);
    }

    public http(message: string) {
        this.log('http', message);
    }

    public info(message: string) {
        this.log('info', message);
    }

    public warn(message: string) {
        this.log('warn', message);
    }

    public error(message: string) {
        this.log('error', message);
    }
}
