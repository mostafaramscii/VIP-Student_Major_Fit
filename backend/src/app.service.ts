import { Injectable } from '@nestjs/common';
import { EntityManager, MikroORM } from '@mikro-orm/postgresql';
@Injectable()
export class MyService {
  constructor(
    private readonly orm: MikroORM,
    private readonly em: EntityManager,
  ) {}
}
