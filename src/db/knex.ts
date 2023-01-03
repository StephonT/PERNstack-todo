import knex from 'knex'
import { knexSnakeCaseMappers } from 'objection';

import config from './config';

//
const environment = process.env.NODE_ENV || 'development';

//deconstruct config and using the key, environment, which is development. knexSnakeCaseMappers maps the snake case to the database.
export default knex({...config[environment], ... knexSnakeCaseMappers() })