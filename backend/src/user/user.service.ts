import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { User } from './user.interface';

@Injectable()
export class UserService {
  private data: User[];

  constructor() {
    const dataPath = path.resolve(__dirname, '..', '..', 'src', 'data.json');
    const jsonData = fs.readFileSync(dataPath, 'utf8');
    this.data = JSON.parse(jsonData);
  }

  async findUsers(email: string, number?: string): Promise<User[]> {
    await this.delay(5000);

    return this.data.filter(user =>
      user.email === email && (!number || user.number === number)
    );
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
