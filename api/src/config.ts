import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const YAML_CONFIG_FILENAME = '.dev.env.yml';

export interface EnvVars {
  port: number;
  database: {
    username: string;
    password: string;
    dbName: string;
  };
}

export default (): EnvVars => {
  return yaml.load(readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'));
};
