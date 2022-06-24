const moment = require('moment');
const Handlebars = require('handlebars');

module.exports = {
    sum: (a, b) => a + b,

    formatDate: (date, format) => {
        var mmnt = moment(date);
        return mmnt.format(format);
    },

    sortable: (field, sort) => {
        const sortType = field === sort.column ? sort.type : 'default';

        const icons = {
            default: 'oi oi-elevator',
            desc: 'oi oi-caret-bottom',
            asc: 'oi oi-caret-top',
        }

        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc',
        }

        const icon = icons[sortType];
        const type = types[sortType];

        const address = Handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`);
        const output = `<a href="${address}">
            <span class="${icon}"></span>
            </a>`;

        return new Handlebars.SafeString(output);
    }
};