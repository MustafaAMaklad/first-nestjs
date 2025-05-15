import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [CatsModule],
  controllers: [CatsController],
  providers: [AppService],
})
export class AppModule {}
