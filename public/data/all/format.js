const fs = require('fs');

// Read data from data.json
fs.readFile('PayTM.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Parse JSON data
    let entries;
    try {
        entries = JSON.parse(data);
    } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
        return;
    }

    // Function to format dates to Unix timestamps
    function formatDatesToUnix(entries) {
        return entries.map(entry => {
            const unixTimestamp = Math.floor(new Date(entry.date).getTime() / 1000);
            return {
                ...entry,
                date: unixTimestamp
            };
        });
    }

    // Update dates to Unix timestamps
    const entriesWithUnixDates = formatDatesToUnix(entries);

    // Convert back to JSON string
    const updatedData = JSON.stringify(entriesWithUnixDates, null, 2);

    // Write back to data.json
    fs.writeFile('data.json', updatedData, 'utf8', (writeErr) => {
        if (writeErr) {
            console.error('Error writing to file:', writeErr);
            return;
        }
        console.log('Data successfully updated and written back to data.json');
    });
});