import { parse } from 'csv-parse';

export const csvRecords = [];
// Initialize the parser
const parser = parse({
    delimiter: ','
});
// Use the readable stream api to consume records
parser.on('readable', function () {
    let record;
    while ((record = parser.read()) !== null) {
        csvRecords.push(record);
    }
});
// Catch any error
parser.on('error', function (err) {
    console.error(err.message);
});

// Write data to the stream
parser.write("title,description\n");
parser.write("Task 01,Descrição da Task 01\n");
parser.write("Task 02,Descrição da Task 02\n");
parser.write("Task 03,Descrição da Task 03\n");
parser.write("Task 04,Descrição da Task 04\n");
parser.write("Task 05,Descrição da Task 05\n");

// Close the readable stream
parser.end();