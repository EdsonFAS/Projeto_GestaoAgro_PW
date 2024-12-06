import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHome(): any {
    return { message: 'Marcos Lindo!' };;
  }


}
