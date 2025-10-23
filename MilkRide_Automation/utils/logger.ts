import fs from 'fs';
import path from 'path';

const logFile = path.join(__dirname, 'Admin-logs.txt');
// Override console.log
const originalLog = console.log;

// export function writeLog(message: string) {
//     const timestamp = new Date().toISOString();
//     const formattedMessage = `[${timestamp}] ${message}`;
//     fs.appendFileSync(logFile, `[${timestamp}] ${message}\n`);
//       // Also print to console
//     console.log(formattedMessage);
console.log = (...args: any[]) => {
    const message = args.map(a => (typeof a === 'string' ? a : JSON.stringify(a))).join(' ');
    const timestamp = new Date().toISOString();
    const formattedMessage = `[${timestamp}] ${message}`;
    
    // Write to file
    fs.appendFileSync(logFile, formattedMessage + '\n');

    // Also print to terminal
    originalLog(formattedMessage);
};



