import { UuidGenerator } from './uuid-gen';

import * as bcrypt from 'bcryptjs';

export const generateUrl = async (protocol: string = '', host: string = '', port: string = '') => {
  protocol = protocol || 'http';
  host = host || 'localhost';
  port = port || '3800';

  const id = UuidGenerator.generateId();
  const salt = await bcrypt.genSalt(10);
  const criptedUrl = await bcrypt.hash(id, salt);
  const buff = Buffer.from(criptedUrl);
  const base64Url = buff.toString('base64');

  return `${protocol}://${host}:${port}/${base64Url}`;
};
