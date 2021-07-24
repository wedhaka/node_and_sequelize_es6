import moment from 'moment';

const momentjs = moment();

/*
 * @params (date)
 * return UTC time
 */
const dateFormatUTC = (date) => {
    return momentjs(date, 'MM-DD-YYYY').utc().format("YYYY-MM-DD HH:mm")
}


/*
 * @params (date)
 * return Short Date Format
 */
const dateFormatShort = (date) => {
    return momentjs(date, 'MM-DD-YYYY').utc().format("YYYY-MM-DD")
}


/*
 * @params (date)
 * return Long Date Format
 */
const dateFormatLong = (date) => {
    return momentjs(date, 'MM-DD-YYYY').utc().format("LLLL")
}

/*
 * @params (date)
 * @params (format)
 * return Specific Date Format
 */
const dateFormatSpecific = (date, format) => {
    return momentjs(date, format).utc().format(format);
}

export { 
    dateFormatUTC,
    dateFormatShort,
    dateFormatLong,
    dateFormatSpecific
};