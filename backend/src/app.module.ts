import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import config from '../mikro-orm.config';
@Module({
  imports: [MikroOrmModule.forRoot(config)],

  controllers: [],
  providers: [],
})
export class AppModule {}
