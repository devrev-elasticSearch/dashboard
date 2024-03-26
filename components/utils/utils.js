import { format } from 'date-fns';

export function formatUnixTimestamp(timestamp, formatString='dd-MM-yyyy HH:mm:ss') {
    // Convert Unix timestamp to milliseconds
    const date = new Date(timestamp * 1000);
    
    // Format the date using date-fns
    return format(date, formatString);
    // return timestamp;
}

export const getSentData = (data) => {
    const sentData = {};
    data.forEach(entry => {
        
    // console.log(entry.date)
        const date = formatUnixTimestamp(entry.date).split(' ')[0];
        const sentiment = entry.attributes.sentiment;
        
        sentData[date] = sentData[date] || { positive: 0, negative: 0 ,neutral:0};

        if (sentiment === 'positive') {
            sentData[date].positive++;
        } else if (sentiment === 'negative') {
            sentData[date].negative++;
        }else{
            sentData[date].neutral++;
        }
    });
    return sentData;
};

export const getPriorData = (data) => {
    const priorData = {};
    data.forEach(entry => {
        const date = formatUnixTimestamp(entry.date).split(' ')[0];
        const priority = entry.attributes.priority;
        
        priorData[date] = priorData[date] || { high: 0, moderate: 0, low: 0, critical: 0 };

        if (priority === 'High') {
            priorData[date].high++;
        } else if (priority === 'Moderate') {
            priorData[date].moderate++;
        } else if (priority === 'Low') {
            priorData[date].low++;
        } else {
            priorData[date].critical++;
        }
    });
    return priorData;
};


export function dateToUnixSeconds(dateString) {
    // Create a new Date object using the provided date string
    const date = new Date(dateString);
    
    // Convert the date to Unix seconds by dividing the milliseconds by 1000
    const unixSeconds = Math.floor(date.getTime() / 1000);

    return unixSeconds;
}