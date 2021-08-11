import lodash from 'lodash';
import mysql from 'mysql-json-schema';
const args = {
    user: 'root',
    password: '',
    host: '127.0.0.1',
    database: 'moodle',
    outputFolder: './output',
    discoverRelations: false,
    extractRelations: true,ignoreDefaultNames: false,
    prefix: 'id_',
    sufix: '_id'
};

mysql.ExportSchemaToFile(args);